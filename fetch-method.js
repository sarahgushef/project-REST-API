// ==========================================
// REST API fetch method

fetch("http://api.github.com/users/sarahgushef")
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

/*
Fetch is only show in browser's console, because fetch is window's method (window.fetch())
*/
