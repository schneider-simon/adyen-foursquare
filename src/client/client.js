import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {requestApi} from "./services/apiService"

ReactDOM.render(<App/>, document.getElementById('root'));

requestApi("hello", {foo: "bar"})