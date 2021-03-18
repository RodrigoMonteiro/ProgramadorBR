const express = require('express')
const app = express()
const socketIO = require('socket.io')
const path = require('path')


app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/grupo1', express.static(path.join(__dirname, 'public')))
app.use('/grupo2', express.static(path.join(__dirname, 'public')))


const server = app.listen(3000, () => {
    console.log("Backend executando...")
})
const messages = [{
    grupo1:[],
    grupo2:[]
}]
const io = socketIO(server)


// Apenas pra uma unica conexão
// io.on('connection', (socket) => {

//     console.log("New connection")
//     socket.emit('update_messages', messages)

//     socket.on('new_message', (data) => {
//         messages.push(data)
//         console.log(messages)
//         socket.emit('update_messages', messages)
//     })

// })

// Para mais de uma conexão

const grupo1 = io.of('/grupo1').on('connection', (socket) => {
    console.log('New connection with grupo 1..')
    socket.emit('update_messages', messages.grupo1)

    socket.on('new_message', (data) =>{
        messages.grupo1.push(data)
        console.log(messages)
        grupo1.emit('update_messages', messages)
    })
})
const grupo2 = io.of('/grupo2').on('connection', (socket) => {
    console.log('New connection with grupo 2..')
    socket.emit('update_messages', messages.grupo2)

    socket.on('new_message', (data) =>{
        messages.grupo2.push(data)
        console.log(messages)
        grupo2.emit('update_messages', messages)
    })
})