// Create => POST
// Read   => GET
// Update => PUT / PATCH
// Delete => DELETE

// Create request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();
// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    // Access JSON data here
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Log each movie's title
            console.log(movie.title);
        })
    } else {
        console.log('error');
    }
}

// Send request
request.send();