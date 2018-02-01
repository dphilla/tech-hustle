
const user = require('./User')
const API = 'http://powerful-stream-11261.herokuapp.com'


function fetchCurrentUser () {
  function doFetch() {
   fetch(`http://powerful-stream-11261.herokuapp.com/current_user`, {
      //mode: 'no-cors',
      headers: {'Allow-Access-Control-Origin':'*'}
    })
      .then(function(response) {
      return response.json()
      }
     )
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

function getContacts (userId) {
  fetch(`${API}/api/v1/contacts?current_user=${userId}`, {
      mode: 'no-cors',
      headers: {'Allow-Access-Control-Origin':'*'}
    })
    .then(function(response) {
          return response.json()})
        .then(function(data) {
         console.log(data[0])
        })
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

function aThing () {
 return "something"
}

//post events

//with time

  //crud interactions
  //crud notes
  //finish crud events


export {fetchCurrentUser, getContacts, aThing};
