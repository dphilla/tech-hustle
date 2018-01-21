



function setCurrentUser(id) {
    document.cookie = "id=" + id;
    window.location = ""; // TO REFRESH THE PAGE
}

function getCurrentUserFromCookie () {
  let raw = document.cookie
  let id = raw.split("=")[1]
  return id
}

function deleteCookie () {
  document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  //this forces the browser to delete the cookie bc its a time in the past
  window.location = ""; // TO REFRESH THE PAGE
}

function endCurrentUser () {
  deleteCookie()
}



export {setCurrentUser, endCurrentUser, getCurrentUserFromCookie}
