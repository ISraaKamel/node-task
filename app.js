const express = require("express")
const app = express()
const PORT = 3500

app.get('/', (req, res) => {
    res.send('Esraa Kamel Ahmed ElNoury \n -- Section 1')
})

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:'+PORT)
})