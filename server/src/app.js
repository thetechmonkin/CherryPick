const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./configs/database");

const User = require("./models/user/UserSchema");

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// POST WITH MONGOOSE MODEL

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: "Saurabh",
      lastName: "Pandey",
      email: "aurabh@test.com",
      password: "saurabh@123",
    });

    await user.save();
    res.send("Data saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

// Global error handler if some req handler is not handled the error correctly then this will come in picture
// and instead of giving the actual error it will show this

app.use("/", (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).send("Something went wrong :(");
  }
});

// First connect to database then listen

connectDB(DATABASE_URL)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is up and running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to the database ", err);
  });
