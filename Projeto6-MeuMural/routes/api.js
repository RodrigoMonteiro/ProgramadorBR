const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/posts')
const cors = require('cors')

const options = {
    origin: "http://192.168.1.9:3000"
}

router.use(cors(options))

router.post("/new", (req, res) => {

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Adicionado com sucesso!")
})


router.get("/all", (req, res) => {
    
    res.json(JSON.stringify(posts.getAll()))

})
module.exports = router