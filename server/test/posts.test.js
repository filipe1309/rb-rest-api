const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generate = () => crypto.randomBytes(20).toString('hex');
const request = (url, method, data) => axios({ url, method, data, validateStatus: false });

// TODO empty test db before all

test('Should get posts', async() => {
    // Given
    const post1 = await postsService.savePost({ title: generate(), content: generate() });
    const post2 = await postsService.savePost({ title: generate(), content: generate() });
    const post3 = await postsService.savePost({ title: generate(), content: generate() });

    // When
    const response = await request('http://localhost:3000/posts', 'GET');
    const posts = response.data;

    // Then
    expect(response.status).toBe(200);
    expect(posts).toHaveLength(3);

    await postsService.deletePost(post1.id);
    await postsService.deletePost(post2.id);
    await postsService.deletePost(post3.id);
});

test('Should save a post', async() => {
    // Given
    const data = { title: generate(), content: generate() };

    // When
    const response = await request('http://localhost:3000/posts', 'POST', data);
    const post = response.data;

    // Then
    expect(response.status).toBe(201);
    expect(post.title).toBe(data.title);
    expect(post.content).toBe(data.content);
    await postsService.deletePost(post.id);
});

test('Should not save a post', async() => {
    // Given
    const data = { title: generate(), content: generate() };

    // When
    const response1 = await request('http://localhost:3000/posts', 'POST', data);
    const response2 = await request('http://localhost:3000/posts', 'POST', data);
    const post = response1.data;

    // Then
    expect(response2.status).toBe(409);

    await postsService.deletePost(post.id);
});

test('Should update a post', async() => {
    // Given
    const post = await postsService.savePost({ title: generate(), content: generate() });
    post.title = generate();
    post.content = generate();

    // When
    const response = await request(`http://localhost:3000/posts/${post.id}`, 'PUT', post);
    const updatedPost = await postsService.getPost(post.id);

    // Then
    expect(response.status).toBe(204);
    expect(updatedPost.title).toBe(post.title);
    expect(updatedPost.content).toBe(post.content);
    await postsService.deletePost(updatedPost.id);
});

test('Should not update a post', async() => {
    // Given
    const post = { id: 1 };

    // When
    const response = await request(`http://localhost:3000/posts/${post.id}`, 'PUT', post);

    // Then
    expect(response.status).toBe(404);
});

test('Should delete a post', async() => {
    // Given
    const post = await postsService.savePost({ title: generate(), content: generate() });

    // When
    const response = await request(`http://localhost:3000/posts/${post.id}`, 'DELETE');
    const posts = await postsService.getPosts();

    // Then
    expect(response.status).toBe(204);
    expect(posts).toHaveLength(0);
});