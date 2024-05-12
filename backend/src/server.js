import "express-async-errors";
import "dotenv/config";
import express from "express";
import { AppError } from "./utils/AppError.js";
import { connection } from "./database/db/index.js";
import { routes } from "./routes/index.js";
import { UPLOADS_FOLDER } from "./configs/upload.js";
import cors from "cors";

connection(); // DB connection
const app = express(); // iniciando app node com express

const NODE_ENV = process.env.NODE_ENV;

const whitelist = ["https://rocketnotesmovies.netlify.app"];

if (NODE_ENV === "development") {
  const list = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:8081",
    "http://localhost:8080",
  ];
  for (const item of list) whitelist.push(item);
}
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions)); // tornando a api acessível a diversas origens
app.use(express.json()); // fazendo os middlewares apenas trabalhar com json e suas formatações
app.use(routes); // usando todas as minhas rotas
app.use("/files", express.static(UPLOADS_FOLDER)); // Criando rota de arquivos estaticos

app.use((error, req, res, next) => {
  console.error(error);
  if (error instanceof AppError)
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
    });
  return (
    res.status(500),
    json({
      status: 500,
      message: "Internal server error",
    })
  );
});

const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`)
);
