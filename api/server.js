const express = require("express");
const helmet = require("helmet");

const recipesRouter = require("../recipe-book/recipes");
const ingredientsRouter = require("../recipe-book/ingredients");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);


module.exports = server;
