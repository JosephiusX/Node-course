const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId, userOne, setupDatabase} = require('./fixtures/db')

// makes sure users are deleted before test runs
beforeEach(setupDatabase)

test('Should signup a new user', async () => {
	const response = await request(app)
		.post('/users')
		.send({
			name: 'Andrew',
			email: 'andrew@example.com',
			password: 'MyPass777!',
		})
		.expect(201)

	// Assert that the database was changed correctly
	const user = await User.findById(response.body.user._id)
	expect(user).not.toBeNull()

	// assertions about the response
	expect(response.body).toMatchObject({
		user: {
			name: 'Andrew',
			email: 'andrew@example.com',
		},
		token: user.tokens[0].token,
	})
	expect(user.password).not.toBe('MyPass777!')
})

test('Should login existing user', async () => {
	const response = await request(app)
		.post('/users/login')
		.send({email: userOne.email, password: userOne.password})
		.expect(200)

	const user = await User.findById(userOneId)
	expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistant user', async () => {
	await request(app)
		.post('/users/login')
		.send({email: 'bob', password: 'bob@gmail.com'})
		.expect(400)
})

test('Should get profile for user', async () => {
	await request(app)
		.get('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200)
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
	const user = await User.findById(userOneId)
	expect(user).toBeNull()
})

test('should not delete account for unauthenticated user', async () => {
	await request(app).delete('/users/me').expect(401)
})

test('Should upload avatar image', async () => {
	await request(app)
		.post('/users/me/avatar')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.attach('avatar', 'tests/fixtures/profile-pic.jpg')
		.expect(200)
	const user = await User.findById(userOneId)
	expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
	await request(app)
		.patch('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({name: 'Jess'})
		.expect(200)
	const user = await User.findById(userOneId)
	expect(user.name).toEqual('Jess')
})

test('Should not update valid user fields', async () => {
	await request(app)
		.patch('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({location: 'Philadelphia'})
		.expect(400)
})
