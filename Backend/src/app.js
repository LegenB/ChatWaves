import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import globalRoutes from './routes/global.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";

// server 
const app = express();

app.use(morgan('dev'));

// Permite a express entender los request body en el formato Json
app.use(express.json());

// Permite a express leer las cookies en un objeto Json
app.use(cookieParser());

// Permite al backend recibir llamas de otros dominios 
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Todas la rutas del backend inician con /api
app.use("/api",authRoutes);
app.use("/api",taskRoutes);
app.use("/api",globalRoutes);

export default app;

        