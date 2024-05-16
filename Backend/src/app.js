import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import cookieParser from "cookie-parser";

// server 
const app = express();

app.use(morgan('dev'));

// Permite a express entender los request body en el formato Json
app.use(express.json());

// Permite a express leer las cookies en un objeto Json
app.use(cookieParser());

// Todas la rutas del backend inician con /api
app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app;

        