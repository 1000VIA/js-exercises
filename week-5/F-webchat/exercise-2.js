/*

========
Task 2
========

Your second task is to send a new message to the server.

After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. Use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }


===============
Expected result
===============

After opening index.html in your browser, write a message in the input field and click
on the submit button. Then check the following:

1) The input field should be empty.
2) When you refresh the page in your browser, you should be able to see your new message in the message list.
*/


// Write your code here

const btnSbmit = document.querySelector('#submit')

btnSbmit.addEventListener('click', getNewMessage)

function getNewMessage() {

    const sendMessageInput = document.querySelector('#message-input').value;

    const requestBody = { content: sendMessageInput }

    const init = {
        body: JSON.stringify(requestBody),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }
    fetch('https://codeyourfuture.herokuapp.com/api/messages', init)
        .then(response => response.json())
        .then((data => {
            (document.querySelector('#message-input')).value = ''
        }))
        .catch(error => error)
}