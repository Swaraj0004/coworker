const readJwtSecret = () => {
  const value = process.env.JWT_SECRET?.trim();
  if (!value) {
    throw new Error("JWT_SECRET is required. Set it in server/.env");
  }
  return value;
};

export const JWT_SECRET = readJwtSecret();
