

function makeRequest(callback) {
  var requestOptions = {
    url: 'http://localhost:3000/yeg-weather',
    method: 'GET',
    success: callback
  }
  $.ajax(requestOptions)
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('startRequest').addEventListener('click', function() {
    makeRequest(function(response) {
      const currently = response.currently
      const itIs = 'It is ' + currently.summary + ' and the temperature is ' + currently.temperature + ' C'
      document.getElementById('weather').innerHTML = itIs
    })
  })
})
