import React, {Component} from 'react';
import './styles/css/app.css';
import Header from "./components/layout/Header"
import VenueSearchForm from "./components/venues/VenueSearchForm"
import VenueList from "./components/venues/VenueList"
import Footer from "./components/layout/Footer"
import Content from "./components/layout/Content"
import {requestVenuesFromApi} from "./services/apiService"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venueSearchParameters: {
        ll: null,
        near: "Amsterdam",
        query: "",
        radius: null
      }
    }

    this.onVenueSearchChange = this.onVenueSearchChange.bind(this)
    this.onVenueSearchApply = this.onVenueSearchApply.bind(this)
  }

  onVenueSearchChange(venueSearchParameters) {
    this.setState({venueSearchParameters})
  }

  onVenueSearchApply() {
    requestVenuesFromApi(this.state.venueSearchParameters)
      .then(response => {
        console.log("Got venues", response)
      })
      .catch(error => {
        //TODO: Replace with better error handling
        alert(`Error: ${error.message}`)
        console.error(error)
      })
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Content>
          <VenueSearchForm
            form={this.state.venueSearchParameters}
            onChange={this.onVenueSearchChange}
            onSubmit={this.onVenueSearchApply}
          />
          <VenueList/>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
