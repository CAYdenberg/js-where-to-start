

function sendChat(payload, callback) {
  var requestOptions = {
    url: 'http://localhost:3000/chat',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success: callback
  }
  console.log(requestOptions)
  $.ajax(requestOptions)
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('new-chat').addEventListener('submit', function(e) {
    e.preventDefault()
    var input = document.getElementById('new-chat-input')
    var text = input.value
    sendChat({chat: text}, function(res) {
      input.value = ''
      console.log(res)
    })
  })
})
