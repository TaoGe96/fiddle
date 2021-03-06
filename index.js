const express = require('express')
const app = express()
const port = process.env.PORT|| 3000

app.use(express.static(__dirname+'/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log("sent!");
    console.log(__dirname);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))