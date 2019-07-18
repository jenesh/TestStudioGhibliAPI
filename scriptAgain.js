const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = './assets/logo.png';
const header = document.createElement('div');
header.setAttribute('class', 'header');
const footer = document.createElement('footer');
const disclamer = document.createElement('marquee');
disclamer.innerHTML = "<p><a href='https://ghibliapi.herokuapp.com/' target='_blank'>Studio Ghibli API</a></p>";

app.appendChild(header);
header.appendChild(logo);
app.appendChild(container);
app.appendChild(footer);
footer.appendChild(disclamer);

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films');

request.onload = function () {
    // JSON.parse this.response
    const data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach( movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 270);
            p.textContent = `${movie.description.trim()}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Error! Failed to load. Try again Later.";
        app.appendChild(errorMessage);
    }
}

request.send();