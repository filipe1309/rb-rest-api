const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generate = function() {
    return crypto.randomBytes(20).toString('hex');
}

test('Should get posts', async() => {
    // Given
    const post1 = await postsService.savePost({ title: generate(), content: generate() });
    const post2 = await postsService.savePost({ title: generate(), content: generate() });
    const post3 = await postsService.savePost({ title: generate(), content: generate() });

    // When
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'GET'
    });

    const posts = response.data;

    // Then
    expect(posts).toHaveLength(3);

    await postsService.deletePost(post1.id);
    await postsService.deletePost(post2.id);
    await postsService.deletePost(post3.id);
});