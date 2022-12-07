const express = require('express')
const path = require('path')

const app = express()

const routePublic = path.join(__dirname, "public");

app.use(express.static(routePublic));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(3001, () => console.log('Anda el sv'))