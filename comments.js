// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 4001;
const { handleNewComment, handleGetComments } = require('./commentsHandler');

app.post('/comments', handleNewComment);
app.get('/comments', handleGetComments);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});