const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const cors = require("cors");

const placesRoutes = require("./routes/places-routes");

const app = express();
app.use(cors);
app.use(express.json());

app.use("/api/places", placesRoutes);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // connectDB
    await connectDB();
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
