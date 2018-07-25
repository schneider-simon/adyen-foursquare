import React from 'react';
import {Button, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row} from "reactstrap"
import PropTypes from 'prop-types'

class VenueSearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onInput(name, event) {
    const value = event.target.value

    const newParameters = Object.assign({}, this.props.form, {
      [name]: value
    })

    this.props.onChange(newParameters)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const onInput = (name) => (event) => this.onInput(name, event)

    return (
      <Form>
        <Row>
          <Col md="5">
            <Label>What</Label>
            <InputGroup>
              <Input value={this.props.form.query} onChange={onInput("query")}/>
              <InputGroupAddon addonType="append">
                <Button>Locate</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col md="5">
            <Label>Where</Label>
            <Input value={this.props.form.near} onChange={onInput("near")}/>
          </Col>
          <Col md="2">
            <Label className="hidden-sm-down">&nbsp;</Label>
            <Button onClick={this.onSubmit} block={true}>Search</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

VenueSearchForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
VenueSearchForm.defaultProps = {};

export default VenueSearchForm;
