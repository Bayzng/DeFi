const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const initializePassport = require("./config/passport-setup");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const cloudinary = require("cloudinary").v2;

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up MongoDB store
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
  expires: 1 * 60 * 60, // 1hr in seconds
});

// Use express-session middleware
app.use(
  session({
    secret: process.env.JWT_SECRET, // Change this to a secure secret key
    resave: true,
    saveUninitialized: false,
    store: store, // Use MongoDB store
    cookie: {
      maxAge: 1 * 60 * 60 * 1000, // 1hr in milliseconds,
      secure: true, // Set to true if using HTTPS
      sameSite: "none",
    },
  })
);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing

app.use(express.json({ limit: "50mb" })); //parse json data inside the req body
app.use(express.urlencoded({ extended: true })); // parse form data inside the req body
app.use(cors(corsOptions));
app.use(cookieParser());

// Configure passport
initializePassport(passport);

// Middleware to initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
app.use("/account", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Is 🏃‍♂️ On PORT ${PORT}`));
  })
  .catch((err) => console.log(err));
