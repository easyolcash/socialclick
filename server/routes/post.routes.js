const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const SocialPoster = require('../services/SocialPoster');

router.post('/', auth, async (req, res) => {
  try {
    const { content, platforms, scheduledTime } = req.body;
    const postId = await Post.create(req.user.id, content, platforms, scheduledTime);
    
    if (!scheduledTime) {
      // Post immediately
      await SocialPoster.postToAll(postId);
    }
    
    res.json({ success: true, postId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.getByUserId(req.user.id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;