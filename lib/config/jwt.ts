const readJwtSecret = () => {
  const value = process.env.JWT_SECRET?.trim();
  if (value) {
    return value;
  }

  console.warn(
    "[JWT] JWT_SECRET is missing. Using temporary fallback. Set JWT_SECRET in root .env for production."
  );
  return "dev_jwt_secret_change_me";
};

export const JWT_SECRET = readJwtSecret();
