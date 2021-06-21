require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000 || process.env.PORT;
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

require("./Routes")(app);

mongoose
  .connect(process.env.CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected To MongoDB!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
