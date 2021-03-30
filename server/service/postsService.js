const postsData = require('../data/postsData');

exports.getPosts = () => {
    return postsData.getPosts();
};

exports.getPost = async(id) => {
    const post = await postsData.getPost(id);
    if (!post) throw new Error('Post not found');
    return post;
};

exports.savePost = (post) => {
    return postsData.savePost(post);
};

exports.deletePost = (id) => {
    return postsData.deletePost(id);
};

exports.updatePost = async(id, post) => {
    await exports.getPost(id);
    return postsData.updatePost(id, post);
};