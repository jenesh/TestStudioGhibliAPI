const app = document.getElementById('root');
const header = document.createElement('div');
const container = document.createElement('div');
const footer = document.createElement('marquee');
const logo = document.createElement('img');
logo.src = './assets/logo.png';

container.setAttribute('class', 'container');
header.setAttribute('class', 'header');
footer.setAttribute('class', 'footer');

footer.innerHTML = '<p><a href="https://ghibliapi.herokuapp.com/films">Studio Ghlibi API</a></p>'

header.appendChild(logo);
app.appendChild(header);
app.appendChild(container);
app.appendChild(footer);

const request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    const data = JSON.parse(this.response);

    data.forEach( movie => {
        if (request.status >= 200 && request.status < 400) {
            const card = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');

            card.setAttribute('class', 'card');

            h1.textContent = movie.title;
            movie.description = movie.description.substring(0, 275);
            p.textContent = `${movie.description.trim()}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Error, failed to load!'

            app.appendChild(errorMessage);
        }
    })
}

request.send();