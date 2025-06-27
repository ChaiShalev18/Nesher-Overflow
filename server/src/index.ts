import app from "./app";
import connectDB from "./config/db";
import { env } from "./config/env";
import { createDefaultAdmin } from "./modules/user/createDefaultAdmin";

const startServer = async () => {
  await connectDB();
  await createDefaultAdmin();

  app.listen(env.port, env.ip, () => {
    console.log(`🚀 Server running at http://${env.ip}:${env.port}`);
  });
};

startServer();
