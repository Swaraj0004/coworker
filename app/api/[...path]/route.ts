import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "../../../src/backend/config/db";
import { JWT_SECRET } from "../../../src/backend/config/jwt";
import {
  checkUsername,
  getMe,
  login,
  register,
  requestForgotPasswordOtp,
  resetPassword,
  sendSignupOtp,
  updateMyProfile,
  updateMySecurity,
  verifyForgotPasswordOtp,
  verifySignupOtp
} from "../../../src/backend/controllers/auth.controller";
import {
  createSpace,
  deleteOwnerSpace,
  geocodeSpaceAddress,
  getIndiaCityStats,
  getIndiaRegionsGeo,
  getNearbySpaces,
  getOwnerEnquiryNotifications,
  getOwnerSpaces,
  getSpaceById,
  updateOwnerSpace,
  uploadSpacePhotos
} from "../../../src/backend/controllers/space.controller";
import {
  cancelBooking,
  createBooking,
  getMyBookings,
  getOwnerAnalytics,
  getOwnerBookings,
  verifyBookingPayment
} from "../../../src/backend/controllers/booking.controller";
import { createReview, getReviewsBySpace } from "../../../src/backend/controllers/review.controller";
import {
  createSpaceLead,
  getMyNotifications,
  markNotificationRead,
  respondToLeadNotification
} from "../../../src/backend/controllers/notification.controller";
import {
  deleteReviewAsAdmin,
  deleteSpaceAsAdmin,
  getAdminStats,
  getModerationReviews,
  getModerationSpaces,
  getOwnerVerificationQueue,
  moderateOwnerVerification,
  moderateSpaceVerification
} from "../../../src/backend/controllers/admin.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AppUserRole = "user" | "owner" | "admin";
type AppUser = { id: string; role: AppUserRole };
type ControllerFn = (req: any, res: any) => Promise<unknown> | unknown;

const resolveDb = (() => {
  let ready: Promise<unknown> | null = null;
  return () => {
    if (!ready) {
      ready = connectDB();
    }
    return ready;
  };
})();

const jsonFromQuery = (request: NextRequest) => {
  const query: Record<string, string> = {};
  request.nextUrl.searchParams.forEach((value, key) => {
    query[key] = value;
  });
  return query;
};

const parseBody = async (request: NextRequest) => {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return request.json().catch(() => ({}));
  }
  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const plain: Record<string, unknown> = {};
    form.forEach((value, key) => {
      if (value instanceof File) {
        return;
      }
      plain[key] = String(value);
    });
    return plain;
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const form = await request.formData();
    const plain: Record<string, string> = {};
    form.forEach((value, key) => {
      plain[key] = String(value);
    });
    return plain;
  }
  return {};
};

const parseUploadFiles = async (request: NextRequest) => {
  const form = await request.formData();
  const files = form.getAll("photos").filter((item): item is File => item instanceof File);

  const converted = await Promise.all(
    files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return {
        fieldname: "photos",
        originalname: file.name,
        encoding: "7bit",
        mimetype: file.type || "application/octet-stream",
        size: file.size,
        buffer
      };
    })
  );

  return converted;
};

const decodeOptionalUser = (request: NextRequest): AppUser | null => {
  const authHeader = request.headers.get("authorization") || "";
  if (!authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AppUser;
    return { id: decoded.id, role: decoded.role };
  } catch {
    return null;
  }
};

const requireUser = (
  request: NextRequest,
  allowedRoles?: AppUserRole[]
): { ok: true; user: AppUser } | { ok: false; response: NextResponse } => {
  const authHeader = request.headers.get("authorization") || "";
  if (!authHeader.startsWith("Bearer ")) {
    return { ok: false, response: NextResponse.json({ message: "Unauthorized" }, { status: 401 }) };
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AppUser;
    if (allowedRoles && !allowedRoles.includes(decoded.role)) {
      return { ok: false, response: NextResponse.json({ message: "Forbidden" }, { status: 403 }) };
    }
    return { ok: true, user: { id: decoded.id, role: decoded.role } };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return {
        ok: false,
        response: NextResponse.json({ message: "Token expired. Please login again." }, { status: 401 })
      };
    }
    return { ok: false, response: NextResponse.json({ message: "Invalid token" }, { status: 401 }) };
  }
};

const runController = async (controller: ControllerFn, reqLike: any) => {
  const resLike = {
    statusCode: 200,
    payload: undefined as unknown,
    headersSent: false,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(data: unknown) {
      this.payload = data;
      this.headersSent = true;
      return this;
    },
    end() {
      this.headersSent = true;
      return this;
    }
  };

  await controller(reqLike, resLike);

  const responseBody = resLike.payload ?? {};
  return NextResponse.json(responseBody, { status: resLike.statusCode || 200 });
};

const notFound = () => NextResponse.json({ message: "Not found" }, { status: 404 });

const handleAuth = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const body = await parseBody(request);
  const user = decodeOptionalUser(request) || undefined;

  if (method === "GET" && segments[0] === "me") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(getMe, {
      headers: { authorization: request.headers.get("authorization") || undefined },
      query,
      params: {},
      body,
      user: required.user
    });
  }

  if (method === "PUT" && segments[0] === "me" && segments[1] === "profile") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(updateMyProfile, {
      headers: { authorization: request.headers.get("authorization") || undefined },
      query,
      params: {},
      body,
      user: required.user
    });
  }

  if (method === "PUT" && segments[0] === "me" && segments[1] === "security") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(updateMySecurity, {
      headers: { authorization: request.headers.get("authorization") || undefined },
      query,
      params: {},
      body,
      user: required.user
    });
  }

  if (method === "POST" && segments[0] === "check-username") return runController(checkUsername, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "send-signup-otp") return runController(sendSignupOtp, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "verify-signup-otp") return runController(verifySignupOtp, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "register") return runController(register, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "login") return runController(login, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "forgot-password" && segments[1] === "request")
    return runController(requestForgotPasswordOtp, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "forgot-password" && segments[1] === "verify")
    return runController(verifyForgotPasswordOtp, { query, params: {}, body, user });
  if (method === "POST" && segments[0] === "forgot-password" && segments[1] === "reset")
    return runController(resetPassword, { query, params: {}, body, user });

  return notFound();
};

const handleSpaces = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const optionalUser = decodeOptionalUser(request) || undefined;

  if (method === "GET" && segments[0] === "nearby") return runController(getNearbySpaces, { query, params: {}, body: {}, user: optionalUser });
  if (method === "GET" && segments[0] === "cities" && segments[1] === "india")
    return runController(getIndiaCityStats, { query, params: {}, body: {}, user: optionalUser });
  if (method === "GET" && segments[0] === "geo" && segments[1] === "india")
    return runController(getIndiaRegionsGeo, { query, params: {}, body: {}, user: optionalUser });

  if (method === "GET" && segments[0] === "owner" && segments[1] === "me") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(getOwnerSpaces, { query, params: {}, body: {}, user: required.user });
  }

  if (method === "GET" && segments[0] === "owner" && segments.length === 1) {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(getOwnerSpaces, { query, params: {}, body: {}, user: required.user });
  }

  if (method === "GET" && segments[0] === "owner" && segments[1] === "enquiries") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(getOwnerEnquiryNotifications, { query, params: {}, body: {}, user: required.user });
  }

  if (method === "POST" && segments[0] === "geocode") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    const body = await parseBody(request);
    return runController(geocodeSpaceAddress, { query, params: {}, body, user: required.user });
  }

  if (method === "POST" && segments[0] === "upload-photo") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    const files = await parseUploadFiles(request);
    return runController(uploadSpacePhotos, {
      query,
      params: {},
      body: {},
      files,
      user: required.user
    });
  }

  if (method === "GET" && segments.length === 1) {
    return runController(getSpaceById, { query, params: { id: segments[0] }, body: {}, user: optionalUser });
  }

  if (method === "POST" && segments.length === 0) {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    const body = await parseBody(request);
    return runController(createSpace, { query, params: {}, body, user: required.user });
  }

  if (method === "PUT" && segments.length === 1) {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    const body = await parseBody(request);
    return runController(updateOwnerSpace, { query, params: { id: segments[0] }, body, user: required.user });
  }

  if (method === "DELETE" && segments.length === 1) {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(deleteOwnerSpace, { query, params: { id: segments[0] }, body: {}, user: required.user });
  }

  return notFound();
};

const handleBookings = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const body = method === "GET" ? {} : await parseBody(request);

  if (method === "GET" && segments[0] === "me") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(getMyBookings, { query, params: {}, body, user: required.user });
  }

  if (method === "GET" && segments[0] === "owner" && segments[1] === "me") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(getOwnerBookings, { query, params: {}, body, user: required.user });
  }

  if (method === "GET" && segments[0] === "owner" && segments[1] === "analytics") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(getOwnerAnalytics, { query, params: {}, body, user: required.user });
  }

  if (method === "POST" && segments[0] === "spaces" && segments[1]) {
    const required = requireUser(request, ["user", "owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(createBooking, { query, params: { spaceId: segments[1] }, body, user: required.user });
  }

  if (method === "POST" && segments[0] === "verify-payment") {
    const required = requireUser(request, ["user", "owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(verifyBookingPayment, { query, params: {}, body, user: required.user });
  }

  if (method === "PATCH" && segments[1] === "cancel") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(cancelBooking, { query, params: { id: segments[0] }, body, user: required.user });
  }

  return notFound();
};

const handleReviews = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const optionalUser = decodeOptionalUser(request) || undefined;

  if (method === "GET" && segments[0]) {
    return runController(getReviewsBySpace, {
      query,
      params: { spaceId: segments[0] },
      body: {},
      user: optionalUser
    });
  }

  if (method === "POST" && segments.length === 0) {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    const body = await parseBody(request);
    return runController(createReview, { query, params: {}, body, user: required.user });
  }

  return notFound();
};

const handleNotifications = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const body = method === "GET" ? {} : await parseBody(request);

  if (method === "GET" && segments[0] === "me") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(getMyNotifications, { query, params: {}, body, user: required.user });
  }

  if (method === "PATCH" && segments[1] === "read") {
    const required = requireUser(request);
    if (!required.ok) return required.response;
    return runController(markNotificationRead, {
      query,
      params: { id: segments[0] },
      body,
      user: required.user
    });
  }

  if (method === "PATCH" && segments[1] === "respond") {
    const required = requireUser(request, ["owner", "admin"]);
    if (!required.ok) return required.response;
    return runController(respondToLeadNotification, {
      query,
      params: { id: segments[0] },
      body,
      user: required.user
    });
  }

  if (method === "POST" && segments[0] === "spaces" && segments[1] && segments[2] === "lead") {
    const required = requireUser(request, ["user", "owner"]);
    if (!required.ok) return required.response;
    return runController(createSpaceLead, {
      query,
      params: { id: segments[1] },
      body,
      user: required.user
    });
  }

  return notFound();
};

const handleAdmin = async (request: NextRequest, segments: string[], query: Record<string, string>) => {
  const method = request.method.toUpperCase();
  const required = requireUser(request, ["admin"]);
  if (!required.ok) return required.response;
  const body = method === "GET" ? {} : await parseBody(request);

  if (method === "GET" && segments[0] === "stats") return runController(getAdminStats, { query, params: {}, body, user: required.user });
  if (method === "GET" && segments[0] === "spaces")
    return runController(getModerationSpaces, { query, params: {}, body, user: required.user });
  if (method === "PATCH" && segments[0] === "spaces" && segments[2] === "verify")
    return runController(moderateSpaceVerification, {
      query,
      params: { id: segments[1] },
      body,
      user: required.user
    });
  if (method === "DELETE" && segments[0] === "spaces" && segments[1])
    return runController(deleteSpaceAsAdmin, {
      query,
      params: { id: segments[1] },
      body,
      user: required.user
    });
  if (method === "GET" && segments[0] === "reviews")
    return runController(getModerationReviews, { query, params: {}, body, user: required.user });
  if (method === "DELETE" && segments[0] === "reviews" && segments[1])
    return runController(deleteReviewAsAdmin, {
      query,
      params: { id: segments[1] },
      body,
      user: required.user
    });
  if (method === "GET" && segments[0] === "owners")
    return runController(getOwnerVerificationQueue, { query, params: {}, body, user: required.user });
  if (method === "PATCH" && segments[0] === "owners" && segments[2] === "verify")
    return runController(moderateOwnerVerification, {
      query,
      params: { id: segments[1] },
      body,
      user: required.user
    });

  return notFound();
};

const handler = async (
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) => {
  try {
    await resolveDb();

    const { path } = await context.params;
    const segments = (path || []).filter(Boolean);
    const resource = segments[0];
    const rest = segments.slice(1);
    const query = jsonFromQuery(request);

    if (resource === "health" && request.method.toUpperCase() === "GET") {
      return NextResponse.json({ ok: true, service: "space-now-api" });
    }

    if (!resource) {
      return notFound();
    }

    if (resource === "auth") return await handleAuth(request, rest, query);
    if (resource === "spaces") return await handleSpaces(request, rest, query);
    if (resource === "bookings") return await handleBookings(request, rest, query);
    if (resource === "reviews") return await handleReviews(request, rest, query);
    if (resource === "notifications") return await handleNotifications(request, rest, query);
    if (resource === "admin") return await handleAdmin(request, rest, query);
    return notFound();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message }, { status: 500 });
  }
};

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE };
