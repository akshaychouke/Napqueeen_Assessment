const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getLatestPosts,
} = require("../controllers/postController.js");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.get("/latest", getLatestPosts);

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
