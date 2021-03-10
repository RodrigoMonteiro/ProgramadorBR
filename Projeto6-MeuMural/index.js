const express = require('express')
const path = require('path')
const app = express()
const apiRoute = require('./routes/api')




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',apiRoute)
app.use(express.static(path.join(__dirname,"public")))




app.listen(3000, () => {
    console.log("Backend executando...")
})
