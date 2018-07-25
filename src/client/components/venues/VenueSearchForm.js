import React from 'react';
import {Button, Col, Form, Input, Label, Row} from "reactstrap"
import PropTypes from 'prop-types'

class VenueSearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  onInput(name, event) {
    const value = event.target.value
    console.log(value)
  }

  render() {
    const onInput = (name) => this.onInput(name, event)

    return (
      <Form>
        <Row>
          <Col md="5">
            <Label>What</Label>
            <Input onChange={onInput("query")}/>
          </Col>
          <Col md="5">
            <Label>Where</Label>
            <Input onChange={onInput("near")}/>
          </Col>
          <Col md="2">
            <Label className="hidden-sm-down">&nbsp;</Label>
            <Button block={true}>Search</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

VenueSearchForm.propTypes = {
  form: PropTypes.obj.isRequired,
  onChange: PropTypes.func.isRequired
};
VenueSearchForm.defaultProps = {};

export default VenueSearchForm;
