// import express from "express";
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { connection } from "./database/dbConnection.js";
// import { errorMiddleware } from "./middlewares/error.js";
// import userRouter from "./routes/userRouter.js";
// import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";

// export const app = express();
// config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/user", userRouter);

// removeUnverifiedAccounts();
// connection();

// app.use(errorMiddleware);




import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";

export const app = express();
config({ path: "./config.env" });

// CORS Configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Ensure this is set correctly
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // Explicit headers
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

// Rest of your middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/user", userRouter);

// Database and cleanup
removeUnverifiedAccounts();
connection();

// Error handling
app.use(errorMiddleware);