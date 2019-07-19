const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
const logo = document.createElement('img');
logo.src = './assets/logo.png';
const header = document.createElement('div');
header.appendChild(logo);
header.setAttribute('class','header');
const footer = document.createElement('marquee');
footer.textContent = `Studio Ghibli API`;
footer.setAttribute('class', 'footer');

app.appendChild(header);
app.appendChild(container);
app.appendChild(footer);

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    const data = JSON.parse(this.response);

    data.forEach( movies => {
        if (request.status >= 200 && request.status < 400) {
            const card = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');

            card.setAttribute('class' , 'card');
            h1.textContent = movies.title;
            movies.description = movies.description.substring(0,275);
            p.textContent = `${movies.description.trim()}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        }
    });
}

request.send();