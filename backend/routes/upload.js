const router = require("express").Router();
const upload = require("../middleware/upload");

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded",
    url: req.file.path
  });
});

module.exports = router;