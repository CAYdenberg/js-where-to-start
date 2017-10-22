

function sendChat(payload, callback) {
  var requestOptions = {
    url: 'http://localhost:3000/chat',
    contentType: 'application/json',
    method: 'POST',
    data: JSON.stringify(payload),
    success: callback
  }
  $.ajax(requestOptions)
}

function getChats(callback) {
  var requestOptions = {
    url: 'http://localhost:3000/chat',
    contentType: 'application/json',
    method: 'GET',
    success: callback
  }
  $.ajax(requestOptions)
}

// translate the an array of chats (retrieved from API)
// into a list on the page
function renderChats(chats) {
  var chatsElem = document.getElementById('chats')
  chatsElem.innerHTML = ''
  chats.forEach(function(chat) {
    var newElem = document.createElement('li')
    var textNode = document.createTextNode(chat)
    newElem.appendChild(textNode)
    document.getElementById('chats').appendChild(newElem)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  // get chats from API and render them
  getChats(renderChats)

  // when the button is clicked ...
  document.getElementById('new-chat').addEventListener('submit', function(e) {
    e.preventDefault()
    // get the contents of the text box
    var input = document.getElementById('new-chat-input')
    var text = input.value
    // send it to the API
    sendChat({chat: text}, function(res) {
      // rerender the chats
      input.value = ''
      renderChats(res)
    })
  })

  setInterval(function() {
    getChats(renderChats)
  }, 1000)
})
