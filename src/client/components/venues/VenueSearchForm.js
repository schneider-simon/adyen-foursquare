import React from 'react';
import {Col, Form, Input, Label, Row} from "reactstrap"
import PropTypes from 'prop-types'
import LocationInput from "./LocationInput"
import ProgressButton from 'react-progress-button'
import {getVenueSectionOptions, searchParametersValid} from "../../services/venueSearchService"

class VenueSearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onInput = this.onInput.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
  }

  onInput(name, event) {
    const value = event.target.value

    this.updateAttributes({[name]: value})
  }

  updateAttributes(attributes) {
    const newParameters = Object.assign({}, this.props.form, attributes)
    this.props.onChange(newParameters)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  onChangeLocation({ll, near}) {
    this.updateAttributes({ll, near})
  }

  isValid() {
    return searchParametersValid(this.props.form)
  }

  renderVenueSectionInput() {
    const options = getVenueSectionOptions()
    options.push({key: "", label: "Any"})

    const renderOptions = () => {
      return options.map((option, index) => {
        return <option key={index} value={option.key}>{option.label}</option>
      })
    }

    return <Input type="select" value={this.props.form.section} onChange={(event) => this.onInput("section", event)}>
      {renderOptions()}
    </Input>
  }

  render() {
    const onInput = (name) => (event) => this.onInput(name, event)

    const buttonState = (!this.isValid()) ? this.props.loadingState : "disabled"

    return (
      <Form className="venue-search-form">
        <Row className="venue-search-form__primary-inputs">
          <Col md="5">
            <Label>What</Label>
            <Input value={this.props.form.query} onChange={onInput("query")}/>
          </Col>
          <Col md="5">
            <Label>Where</Label>
            <LocationInput
              near={this.props.form.near}
              ll={this.props.form.ll}
              onChange={this.onChangeLocation}
            />
          </Col>
          <Col md="2">
            <Label className="hidden-md-down">&nbsp;</Label>
            <ProgressButton className="progress-button" onClick={this.onSubmit} state={buttonState}>
              Search
            </ProgressButton>
          </Col>
        </Row>
        <Row className="venue-search-form__secondary-inputs">
          <div className="col-md-5">
            <Label>Radius (in m)</Label>
            <Input type="number" value={this.props.form.radius || ""} onChange={onInput("radius")}/>
          </div>
          <div className="col-md-5">
            <Label>Section</Label>
            {this.renderVenueSectionInput()}
          </div>
        </Row>
      </Form>
    );
  }
}

VenueSearchForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loadingState: PropTypes.string.isRequired,
};
VenueSearchForm.defaultProps = {};

export default VenueSearchForm;
