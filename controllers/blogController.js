const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;

  const blog = await Blog.create({ title, content, image });
  res.json(blog);
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
};

module.exports = { createBlog, getBlogs };