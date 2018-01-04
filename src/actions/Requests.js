const providerLink = "https://www.linkedin.com/oauth/v2/authorization"

function oauthRequest(){

  fetch(providerLink)
      .then(response => response.json())

}


export {oauthRequest}
