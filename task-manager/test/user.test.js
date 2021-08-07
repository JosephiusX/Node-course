const request = require('supertest')
const jwt = require('jsonwebtoken')
const Mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new Mongoose.Types.ObjectId()
const userOne = {
	_id: userOneId,
	name: 'Mike',
	email: 'mike@example.com',
	password: '56wat!!',
	tokens: [
		{
			token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
		},
	],
}

// makes sure users are deleted before test runs
beforeEach(async () => {
	await User.deleteMany()
	await new User(userOne).save()
})

test('Should signup a new user', async () => {
	await request(app)
		.post('/users')
		.send({
			name: 'Andrew',
			email: 'andrew@example.com',
			password: 'MyPass777!',
		})
		.expect(201)
})

test('Should login existing user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: userOne.password,
		})
		.expect(200)
})

test('Should not login nonexistant user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: 'bob',
			password: 'bob@gmail.com',
		})
		.expect(400)
})

test('Should get profile for user', async () => {
	await request(app).get('/users/me').set('Authorization', `Bearer ${userOne.tokens[0].token}`).send().expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
	await request(app).get('/users/me').send().expect(401)
})

test('should delete account for user', async () => {
	await request(app)
		.delete('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send(userOne)
		.expect(200)
})

test('should not delete account for unauthenticated user', async () => {
	await request(app).delete('/users/me').expect(401)
})
