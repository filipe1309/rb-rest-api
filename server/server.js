#!/usr/bin/env node

const express = require('express');
const app = express();
const httpStatusCodes = require('./route/httpStatusCodes');
const port = 3000;

app.use(express.json());
app.use('/', require('./route/postsRoute'));
app.use((error, req, res, next) => {
    if (error.message === 'Post already exists') {
        return res.status(httpStatusCodes.CONFLICT).send(error.message);
    }
    if (error.message === 'Post not found') {
        return res.status(httpStatusCodes.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
});

app.listen(port);