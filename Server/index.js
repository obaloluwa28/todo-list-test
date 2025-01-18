// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainRoutes = require("./routes/index.js");
const dbOne = require("./config/Database.js");
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: ["http://localhost:3002"],
  methods: ["GET", "POST", "PUT", "HEAD", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());

// Sync sequelize models with the databases and start the server
Promise.all([dbOne.sync()])
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Main routes
app.use("/todo", mainRoutes);
