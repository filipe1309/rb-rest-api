const postsData = require('../data/postsData');

exports.getPosts = () => {
    return postsData.getPosts();
};

exports.savePost = (post) => {
    return postsData.savePost(post);
};

exports.deletePost = (id) => {
    return postsData.deletePost(id);
};