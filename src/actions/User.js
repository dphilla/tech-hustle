

function clearListCookies()
{
 var cookies = document.cookie.split(";");
 for (var i = 0; i < cookies.length; i++)
  {
    var spcook =  cookies[i].split("=");
    deleteCookie(spcook[0]);
  }
  function deleteCookie(cookiename)
   {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires="+d;
    var name=cookiename;
    //alert(name);
    var value="";
    document.cookie = name + "=" + value + expires + "; path=/acc/html";
}
window.location = ""; // TO REFRESH THE PAGE
}



function setCurrentUser(id) {
    document.cookie = "id=" + id;
}

function getCurrentUserFromCookie () {
  let raw = document.cookie
  let id = raw.split("=")[1]
  return id
}

function endCurrentUser () {
  clearListCookies()
}



export {setCurrentUser, endCurrentUser, getCurrentUserFromCookie}
