import express from "express";
import Docs from "./documents.js";
import Auth from "./auth.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "success",
  });
});



router.use("/api/v1/documents", Docs);
router.use("/api/v1/auth", Auth);

export default router;
