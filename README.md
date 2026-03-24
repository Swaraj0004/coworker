# Space Now (Pure Next.js)

This project now runs as a **single pure Next.js app**:

- `app/` -> Next App Router pages + API routes
- `app/api/[...path]/route.ts` -> backend API router
- `src/` -> frontend UI + backend modules (`src/backend/*`)
- `data/Indian Cities Geo Data.csv` -> India geo dataset

No separate Express server process is required.

## Local Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment (root `.env`)

Create `.env` in project root using `.env.example`.

Required for full features:

- `MONGO_URI`
- `JWT_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `PAYMENT_MODE` (`mock` or `razorpay`)
- `NEXT_PUBLIC_API_BASE_URL` (optional, defaults to `/api`)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` (optional for client checkout, fallback uses `RAZORPAY_KEY_ID`)

## Deploy (Vercel)

Use one Vercel project (Next.js preset).

1. Import repo
2. Add the same env vars in Vercel Project Settings
3. Deploy

No separate frontend/backend deployment is needed.
