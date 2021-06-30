require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

app.use("/", require("./Routes"));
mongoose
  .connect(process.env.CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected!!!"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
