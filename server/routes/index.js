import express from "express";
import Docs from "./documents.js";
import Auth from "./auth.js";
import path from "node:path"
const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.send({
    message: "success",
  });
});

// Serve static files from the React build folder
router.use(express.static(path.join(process.cwd(), "build")));

// Serve index.html file for all routes
router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build", "index.html"));
});



router.use("/api/v1/documents", Docs);
router.use("/api/v1/auth", Auth);

export default router;
