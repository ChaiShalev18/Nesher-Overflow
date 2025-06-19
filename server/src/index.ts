import app from "./app.ts";
import connectDB from "./config/db.ts";
import { env } from "./config/env.ts";

const startServer = async () => {
  await connectDB();

  app.listen(env.port, env.ip, () => {
    console.log(`🚀 Server running at http://${env.ip}:${env.port}`);
  });
}

startServer();
