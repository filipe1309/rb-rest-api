const postsData = require('../data/postsData');

exports.getPosts = () => {
    return postsData.getPosts();
}