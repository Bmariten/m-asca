const express = require('express');
const multer = require('multer');
const path = require('path');
const { createBlog, getBlogs } = require('../controllers/blogController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();
router.post('/', upload.single('image'), createBlog);
router.get('/', getBlogs);

module.exports = router;