const Post = require("../models/postsModel");
const mongoose = require("mongoose");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, category, theDesiredAmount } = req.body;
    const { userId } = req.user; // Extract userId from req.user

    // Validate category
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    // Create new post with user information
    const newPost = new Post({
      title,
      content,
      category,
      theDesiredAmount,
      user: userId,
      chatButton: true,
    });

    // Save post to database
    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    // Check if the error is due to a duplicate key (title)
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.title === 1
    ) {
      return res.status(400).json({ message: "Title must be unique" });
    }

    console.error("\nError creating post:\n\n", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    // Find all posts without specifying a category
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get posts by category
const getPostsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const posts = await Post.find({ category: categoryId });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update post by ID
const updatePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content, category, user, theDesiredAmount } = req.body;

    // Find and update post
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, category, theDesiredAmount, user },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete post by ID
const deletePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById,
  getPostsByCategory,
};
