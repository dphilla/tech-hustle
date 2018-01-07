

function fetchCurrentUser () {

  fetch('http://localhost:3000/api/v1/users', {
    mode: 'cors',
    headers: {'Allow-Access-Control-Origin':'*'}
  })
  .then(response => response.json())
    .then(data => {
        console.log(data)
    // Now data is in a format we are more used to i.e. {"posts": [{"title": "Fetch Refresher", "author": "Katelyn Kasperowicz"},..]}
  })
  .catch(error => {
    console.log(error)
  })
}



export {fetchCurrentUser}
