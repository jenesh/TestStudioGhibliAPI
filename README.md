# Studio Ghibli API call Test/Practice

#### To make the API call we first create a new object called XMLHttpRequest which will then allow us to send a request to the API link.

```javascript
const request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
```

To learn more about **XMLHttpRequest** check out either [_w3schools_](https://www.w3schools.com/xml/xml_http.asp) or [_MDN_](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).


#### After opening a request we can now send the request:


```javacript
request.send();
```


Once we recieve data back from the API we can do anything with the data. In this example we used the method **.onload** which we set to a function that manipulates the data and displays it on the DOM.


```javascript
request.onload = function () {
  //code
}
```


Inside the function we will `JSON.parse()` the data so it becomes normal javascript. Since we recieve the data as an *array* of *objects* we can use a `.forEach` method to go through each object and display only the data that we want. 



> One thing to note is that sometimes we don't get the data as expected from the API and we end up getting a error. To take care of that problem we use an if/else statement that takes care of instances when we end of getting an error.



That basically covers the basics used in this API call. To check out the live website just click [here](https://jenesh.github.io/TestStudioGhibliAPI/).

Link to the data [here](https://ghibliapi.herokuapp.com/films).

