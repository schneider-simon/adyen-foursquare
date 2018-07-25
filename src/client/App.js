import React, {Component} from 'react';
import './styles/css/app.css';
import Header from "./components/layout/Header"
import VenueSearchForm from "./components/venues/VenueSearchForm"
import VenueList from "./components/venues/VenueList"
import Footer from "./components/layout/Footer"
import Content from "./components/layout/Content"
import {requestVenuesFromApi} from "./services/apiService"
import constants from "./constants"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venueSearchParameters: {
        ll: null,
        near: "Amsterdam",
        query: "",
        radius: null,
        section: ""
      },
      venuesResponse: null,
      loadingState: constants.LOADING_STATES.NOTHING
    }

    this.onVenueSearchChange = this.onVenueSearchChange.bind(this)
    this.onVenueSearchApply = this.onVenueSearchApply.bind(this)
  }

  onVenueSearchChange(venueSearchParameters) {
    this.setState({venueSearchParameters})
  }

  onVenueSearchApply() {
    this.setState({
      loadingState: constants.LOADING_STATES.LOADING
    })

    requestVenuesFromApi(this.state.venueSearchParameters)
      .then(venuesResponse => {
        this.setState({venuesResponse, loadingState: constants.LOADING_STATES.SUCCESS})
      })
      .catch(error => {
        //TODO: Replace with better error handling
        alert(`Error: ${error.message}`)
        console.error(error)

        this.setState({
          loadingState: constants.LOADING_STATES.ERROR
        })
      })
  }

  render() {
    const venues = (this.state.venuesResponse) ? this.state.venuesResponse.venues : []

    return (
      <div className="app">
        <Header/>
        <Content>
          <VenueSearchForm
            form={this.state.venueSearchParameters}
            onChange={this.onVenueSearchChange}
            onSubmit={this.onVenueSearchApply}
            loadingState={this.state.loadingState}
          />
          <VenueList venues={venues}/>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
