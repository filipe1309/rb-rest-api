const db = require('../infra/database.js');

exports.getPosts = () => {
    return db.get('SELECT * from blog.post');
};