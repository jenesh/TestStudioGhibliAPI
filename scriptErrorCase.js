const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = './assets/logo.png';
let container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


let request = new XMLHttpRequest();

request.open('GET', "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
    let data = JSON.parse(this.response);
    // If error runs else
    if (request.status > 400) {
        data.forEach( (movie) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 310);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        })
    } else {
        let p = document.createElement('marquee');
        p.textContent = 'There seems to be an error, try again later';
        app.appendChild(p);
    }
}

request.send();

