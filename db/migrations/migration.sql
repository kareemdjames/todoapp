CREATE TABLE IF NOT EXISTS todo_crud {
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    status VARCHAR(255)
};