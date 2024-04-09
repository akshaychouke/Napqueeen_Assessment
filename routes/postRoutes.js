const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getLatestPost,
} = require("../controllers/postController.js");

router.get("/", getAllPosts);
router.get("/:id", getPostById);

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/latest", getLatestPost);

module.exports = router;
