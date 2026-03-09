const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); //.env mai variable access 
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");


const dns = require("node:dns/promises");//built in DNS module import
dns.setServers(["8.8.8.8", "1.1.1.1"]);  // fix DNS error

const app = express();
app.use(session({
  secret: "your-session-secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
// note: authentication routes may go here in future




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { //connection
    serverSelectionTimeoutMS: 10000,  // time 10 sec 
    retryWrites: true,//retry
})
.then(() => {
    console.log(" MongoDB connected successfully!");
    app.listen(PORT, () => {
        console.log(` Server running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error(" MongoDB connection FAILED:");
    console.error(err.message);
    if (err.cause) console.error("Cause:", err.cause);
});