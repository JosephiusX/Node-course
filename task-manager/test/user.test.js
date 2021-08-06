const request = require('supertest')
const app = require('../src/app')
const { getMaxListeners } = require('../src/models/user')
const User = require('../src/models/user')

const userOne = {
	name: 'Mike',
	email: 'mike@example.com',
	password: '56wat!!',
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
