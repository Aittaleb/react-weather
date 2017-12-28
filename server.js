const express = require('express');

var app = new express();

app.use(express.static('public'));


app.listen(3000, () => {
    console.log('server is up on port 3000');
});

