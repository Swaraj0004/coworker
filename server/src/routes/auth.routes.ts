import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  checkUsername,
  getMe,
  login,
  register,
  requestForgotPasswordOtp,
  resetPassword,
  sendSignupOtp,
  verifyForgotPasswordOtp,
  verifySignupOtp
} from "../controllers/auth.controller";

const router = Router();

router.get("/me", authenticate, getMe);
router.post("/check-username", checkUsername);
router.post("/send-signup-otp", sendSignupOtp);
router.post("/verify-signup-otp", verifySignupOtp);
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password/request", requestForgotPasswordOtp);
router.post("/forgot-password/verify", verifyForgotPasswordOtp);
router.post("/forgot-password/reset", resetPassword);

export default router;
