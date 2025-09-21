import express from "express";
const app = express();

const PORT = 8000;

// make post data available in req.body

app.use(express.json());

import userRouter from "./src/router/userRouter.js";

app.use("/api/v1/users", userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server  is running at http://localhost:${PORT}`);
});
