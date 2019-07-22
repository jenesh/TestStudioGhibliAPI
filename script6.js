let app = document.getElementById("root");
let header = document.createElement('div');
let logo = document.createElement("img");
let container = document.createElement('div');
let footer = document.createElement('marquee');
footer.innerHTML = `<p><a href="https://ghibliapi.herokuapp.com/films">Studio Ghibli API</a></p>`

logo.src = "./assets/logo.png"
header.setAttribute('class', 'header');
header.appendChild(logo);
container.setAttribute('class', 'container');
footer.setAttribute('class', 'footer');

app.appendChild(header);
app.appendChild(container);
app.appendChild(footer);

const request = new XMLHttpRequest();
request.open('GET', "https://ghibliapi.herokuapp.com/films", true)

request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
    console.log(request.status)
    data.forEach( movie => {
        if (request.status >= 200 && request.status < 400) {
            const card = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            card.setAttribute('class', 'card');
            h1.setAttribute('class', 'h1');

            h1.textContent = movie.title;
            movie.description = movie.description.substring(0, 275).trim();
            p.textContent = `${movie.description}...`;

            card.appendChild(h1);
            card.appendChild(p);
            container.appendChild(card);
        }
    })
}

request.send();