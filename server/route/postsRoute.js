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
    try {
        const newPost = await postsService.savePost(post);
        res.status(201).json(newPost);
    } catch (e) {
        if (e.message === 'Post already exists') {
            res.status(409).send(e.message);
        } else {
            res.status(500).send(e.message);
        }
    }
});


router.put('/posts/:id', async(req, res) => {
    const post = req.body;
    try {
        await postsService.updatePost(req.params.id, post);
        res.status(204).end();
    } catch (e) {
        if (e.message === 'Post already exists') {
            res.status(404).send(e.message);
        } else {
            res.status(500).send(e.message);
        }
    }
});


router.delete('/posts/:id', async(req, res) => {
    try {
        await postsService.deletePost(req.params.id);
        res.status(204).end();
    } catch (e) {
        if (e.message === 'Post already exists') {
            res.status(404).send(e.message);
        } else {
            res.status(500).send(e.message);
        }
    }
});

module.exports = router;