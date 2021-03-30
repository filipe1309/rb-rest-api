const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async(req, res) => {
    const posts = await postsService.getPosts();
    // posts = { test: 2 };
    res.json(posts);
});

module.exports = router;