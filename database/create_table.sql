CREATE schema blog;

CREATE TABLE blog.post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
)