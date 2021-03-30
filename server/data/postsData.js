const db = require('../infra/database.js');

exports.getPosts = () => {
    return db.query('SELECT * from blog.post');
};