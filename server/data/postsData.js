const db = require('../infra/database.js');

exports.getPosts = () => {
    return db.query('SELECT * from blog.post');
};

exports.savePost = (post) => {
    return db.one('INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', [post.title, post.content]);
};


exports.deletePost = (id) => {
    return db.none('DELETE FROM blog.post WHERE id = $1', [id]);
};