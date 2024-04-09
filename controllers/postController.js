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
    const postId = req.params.id;
    const post = await Post.findById(postId);
    console.log("The post is =>", post);
    return res
      .status(200)
      .json({ msg: "The post fetched successfully", post: post });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, category_id } = req.body;
    const newPost = new Post({ title, content, category_id });
    await newPost.save();
    return res
      .status(200)
      .json({ msg: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const updatedBlog = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );

    return res
      .status(200)
      .json({ msg: "The blog updated successfully", post: updatedBlog });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedBlog = await Post.findByIdAndDelete(postId);
    return res.status(200).json({ msg: "The blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getLatestPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return res
      .status(200)
      .json({ msg: "Latest posts fetched successfully", posts });
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
