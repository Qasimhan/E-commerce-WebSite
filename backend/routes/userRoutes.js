const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;


  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword
  });

  await user.save();
  res.json("User Registered");
});
// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }


  // token create
  const token = jwt.sign(
    { id: user._id },
    "secretkey",
    { expiresIn: "1d" }
  );

  res.json({
    token: token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
});
// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const jwt = require("jsonwebtoken");

    const token = jwt.sign({ id: req.user._id }, "secretkey", {
      expiresIn: "1d"
    });

    res.redirect(`http://localhost:3000/google-success?token=${token}`);
  }
);
module.exports = router;