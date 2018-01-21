
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

function getContacts (userId){
  fetch(`http://localhost:3000/api/v1/contacts?current_user=${userId}`, {
      mode: 'cors',
      headers: {'Allow-Access-Control-Origin':'*'}
    })
      .then(response => response.json())
        //.then(data => {
      //})
      .catch(error => {
        console.log(error)
    })
}

//post to contacts

//get events

function getEvents () {
  //do some shit
}

function getNotes () {

}


function getInteractions() {

}


//post events

//with time

  //crud interactions
  //crud notes
  //finish crud events


export {fetchCurrentUser, getContacts}
