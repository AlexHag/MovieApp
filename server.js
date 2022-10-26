const express = require('express');

const app = express();

app.use(express.static('wwwroot'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/movies.json', (req, res) => {
    res.sendFile(__dirname + '/movies.json');
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));