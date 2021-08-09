const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML

socket.on('message', (message) => {
	console.log(message)
	const html = Mustache.render(messageTemplate, {
		message, // shorthand for message : message
	})
	$messages.insertAdjacentHTML('beforeend', html)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
	e.preventDefault()

	$messageFormButton.setAttribute('disabled', 'disabled') // disables the use of the btn when clicked
	$sendLocationButton.setAttribute('disabled', 'disabled')

	// disable
	const message = e.target.elements.message.value

	socket.emit('sendMessage', message, (error) => {
		$messageFormButton.removeAttribute('disabled') // enables send btn after message is sent
		$messageFormInput.value = '' // removes text from input
		$messageFormInput.focus() // places cursor back in test input

		if (error) {
			return console.log(error)
		}

		console.log('Message delivery!')
	})
})

$sendLocationButton.addEventListener('click', () => {
	$sendLocationButton.setAttribute('disabled', 'disabled')
	if (!navigator.geolocation) {
		return alert('Geolocation is not supported by your browser.')
	}

	navigator.geolocation.getCurrentPosition((position) => {
		// sending location from client to server
		socket.emit(
			'sendLocation',
			{
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			},
			() => {
				$sendLocationButton.removeAttribute('disabled')
				console.log('Location shared!')
			}
		)
	})
})
