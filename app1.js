

function makeRequest(callback) {
  var requestOptions = {
    url: 'http://localhost:3000/yeg-weather',
    method: 'GET',
    success: callback
  }
  $.ajax(requestOptions)
}

document.addEventListener('DOMContentLoaded', function() {
  // When the button is clicked ...
  document.getElementById('startRequest').addEventListener('click', function() {
    // get the data ...
    makeRequest(function(response) {
      // and put the temperature on the page
      const currently = response.currently
      const itIs = 'It is ' + currently.summary + ' and the temperature is ' + currently.temperature + ' C'
      document.getElementById('weather').innerHTML = itIs
    })
  })
})
