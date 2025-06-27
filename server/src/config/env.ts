import dotenv from "dotenv";

dotenv.config();

type EnvKeys = 
  | "IP_ADDRESS"
  | "PORT"
  | "MONGODB_IP"
  | "MONGODB_PORT"
  | "MONGODB_DATABASE"
  | "JWT_SECRET"
  | "JWT_EXPIRATION"
  | "ADMIN_EMAIL"
  | "ADMIN_PASSWORD";

const getEnvValue = (key: EnvKeys): string => {
  const value = process.env[key];
  
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  ip: getEnvValue("IP_ADDRESS"),
  port: parseInt(getEnvValue("PORT"), 10),
  mongoUri: `mongodb://${getEnvValue("MONGODB_IP")}:${getEnvValue("MONGODB_PORT")}/${getEnvValue("MONGODB_DATABASE")}`,
  jwtSecret: getEnvValue("JWT_SECRET"),
  jwtExpiration: getEnvValue("JWT_EXPIRATION") || "1h",
  adminEmail:getEnvValue("ADMIN_EMAIL") || "admin@nesher.com",
  adminPassword: getEnvValue("ADMIN_PASSWORD") || "Admin1234"
};

