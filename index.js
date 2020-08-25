const express = require('express');

const app = express();


app.get('/', (request, response) => {
    return response.json({"teste": "ok"})
});



app.listen(9854);