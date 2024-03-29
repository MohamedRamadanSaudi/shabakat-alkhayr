const express = require("express");
const dbConnection = require("./config/dbConnection");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const categoryRouter = require("./routes/categoryRouter");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
dbConnection();
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/categories", categoryRouter);

app.listen(process.env.PORT || 3030, () => {
  console.log(`Server is running on port ${process.env.PORT || 3030}...`);
});
