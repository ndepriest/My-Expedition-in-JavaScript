const xhr = new XMLHttpRequest(); //creates new object
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json'; // \
xhr.onreadystatechange = () => { // \
  if (xhr.readyState === XMLHttpRequest.DONE) { // ---> Handles Response
    return xhr.response; // /
  } // /
}; // /

// opens request and sends object
xhr.open('GET', url);
xhr.send();
