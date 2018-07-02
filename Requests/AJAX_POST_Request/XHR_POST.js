//The major difference between a GET request and POST request is that a POST request requires-
//additional information to be sent through the request. This additional information is sent in the body of the post request.

const xhr = new XMLHttpRequest(); // creates new object
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // converts data to a string

// Handles Response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

//opens request and sends object
xhr.open('POST', url);
xhr.send(data);
