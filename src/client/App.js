import React, {Component} from 'react';
import './styles/css/app.css';
import Header from "./components/layout/Header"
import VenueSearchForm from "./components/venues/VenueSearchForm"
import VenueList from "./components/venues/VenueList"
import Footer from "./components/layout/Footer"
import Content from "./components/layout/Content"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venueSearchParameters: {
        ll: "",
        near: "",
        query: "",
        radius: null
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Content>
          <VenueSearchForm/>
          <VenueList/>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
