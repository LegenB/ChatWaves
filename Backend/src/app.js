import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'

// server 
const app = express();

app.use(morgan('dev'));

//Permite a express entender los request json
app.use(express.json());

//Todas la rutas del backend inician con /api
app.use("/api",authRoutes);

export default app;

