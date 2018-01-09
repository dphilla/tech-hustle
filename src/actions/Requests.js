
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

let currentUserId = user.getCurrentUserFromCookie()  //send in params

//get all contacts for user

//post to contacts

//get events

//post events

//with time

  //crud interactions
  //crud notes
  //finish crud events


export {fetchCurrentUser}
