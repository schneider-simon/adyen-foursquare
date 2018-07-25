import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

const callApi = () => {
  let response
  return fetch('/api/hello')
    .then(_response => {
      response = _response

      return response.json();
    })
    .then(body => {
      if (response.status !== 200) {
        throw Error(body.message);
      }

      console.log("got api", body)
    })
};

callApi()