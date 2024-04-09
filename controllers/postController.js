const Post = require("../models/postsModel.js");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log("The posts are => ", posts);
    return res
      .status(200)
      .json({ msg: "All posts fetched successfully", posts: posts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    return res.status(200).json({ msg: "The controller to get post by id" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, category_id } = req.body;
    const newPost = new Post({ title, content, category_id });
    await newPost.save();
    return res.status(200).json({ msg: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    return res.status(200).json({ msg: "All posts are Successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    return res.status(200).json({ msg: "All posts are Successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getLatestPost = async (req, res) => {
  try {
    return res.status(200).json({ msg: "All posts are Successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getLatestPost,
};
