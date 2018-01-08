
const user = require('./User')


function fetchCurrentUser () {
  function doFetch() {
    fetch('http://localhost:3000/current_user', {
      mode: 'cors',
      headers: {'Allow-Access-Control-Origin':'*'}
    })
      .then(response => response.json())
        .then(data => {
            user.setCurrentUser(data)
      })
      .catch(error => {
        console.log(error)
    })
  }
setTimeout(function(){ doFetch(); }, 1500);
}



export {fetchCurrentUser}
