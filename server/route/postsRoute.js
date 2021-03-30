const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async(req, res) => {
    const posts = await postsService.getPosts();
    // posts = { test: 2 };
    res.json(posts);
});

router.post('/posts', async(req, res) => {
    const post = req.body;
    const newPost = await postsService.savePost(post);
    res.json(newPost);
});


module.exports = router;