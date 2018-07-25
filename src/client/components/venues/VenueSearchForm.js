import React from 'react';
import {Col, Form, Input, Label, Row} from "reactstrap"

class VenueSearchForm extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col md="6">
            <Label>What</Label>
            <Input/>
          </Col>
          <Col md="6">
            <Label>Where</Label>
            <Input/>
          </Col>
        </Row>
      </Form>
    );
  }
}

VenueSearchForm.propTypes = {};
VenueSearchForm.defaultProps = {};

export default VenueSearchForm;
