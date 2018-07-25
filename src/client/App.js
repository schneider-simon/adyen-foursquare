import React, {Component} from 'react';
import './styles/css/app.css';
import Header from "./components/layout/Header"
import VenueSearchForm from "./components/venues/VenueSearchForm"
import VenueList from "./components/venues/VenueList"
import Footer from "./components/layout/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <VenueSearchForm/>
          <VenueList/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
