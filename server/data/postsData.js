const db = require('../infra/database.js');

exports.getPosts = () => {
    return db.query('SELECT * from blog.post');
};

exports.getPost = (id) => {
    return db.oneOrNone('SELECT * from blog.post WHERE id = $1', [id]);
};

exports.savePost = (post) => {
    return db.one('INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', [post.title, post.content]);
};

exports.updatePost = (id, post) => {
    return db.none('UPDATE blog.post SET title = $1, content = $2 WHERE id = $3', [post.title, post.content, id]);
};

exports.deletePost = (id) => {
    return db.none('DELETE FROM blog.post WHERE id = $1', [id]);
};