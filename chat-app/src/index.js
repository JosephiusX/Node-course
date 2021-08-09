const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app) // creating a server outside of express for use with socket.io
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
	console.log('New websocket connection')

	socket.emit('message', 'welcome') // emit to a particular connection
	socket.broadcast.emit('message', 'A new user has joined!') // emit to everybody but that particular connection

	socket.on('sendMessage', (message, callback) => {
		const filter = new Filter()

		if (filter.isProfane(message)) {
			return callback('Profanity is not allowed!')
		}

		io.emit('message', message) // io.emmit to sent to everybody
		callback()
	})

	// recieve event on server
	socket.on('sendLocation', (coords, callback) => {
		io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
		callback()
	})

	// code runs whenever client disconnects
	socket.on('disconnect', () => {
		io.emit('message', 'A user has left!') // sends message to clients still connected
	})
})

server.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})
