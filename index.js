import express from "express";
import path from "path";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { io } from "./src/sockets/ConfigureSocket.js";
import database from "./src/database/index.js";
// Import Router
import { AuthRouter, UsersRouter, CategoryRouter, ProductRouter, AddressRouter, LabelAddressRouter, WishlistRouter, CartRouter } from "./src/routes/index.js";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const server = http.createServer(app);
io.attach(server); // Attach Socket.IO to the HTTP server

// Log middleware, ini yang ditambahkan untuk melihat request yang masuk
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

try {
    await database.sync()
    console.log("Database Connected...");
} catch (error) {
    console.error(error);
}

// app.use((req, res, next) => {
//     // res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3000", `${process.env.FRONT_END_URL}`]);
//     const allowedOrigins = ["http://localhost:3000", process.env.FRONT_END_URL];
//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//         res.setHeader("Access-Control-Allow-Origin", origin);
//     }
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.setHeader("Access-Control-Allow-Credentials", "true");

//     if (req.method === 'OPTIONS') {
//         return res.status(200).end(); // Preflight request completed, no further action required
//     }

//     next();
// })

// Use cors middleware
app.use(cors({
    origin: ["http://localhost:3000", process.env.FRONT_END_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
    credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("src/public"))
// Dapatkan __dirname dengan import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "src/public/images")));
// Router
app.use(UsersRouter);
app.use(AuthRouter);
app.use(CategoryRouter);
app.use(ProductRouter);
app.use(AddressRouter);
app.use(LabelAddressRouter);
app.use(WishlistRouter);
app.use(CartRouter);

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log("Server is running....")
})