import React from 'react';
import {Button, Col, Form, Input, Label, Row} from "reactstrap"

class VenueSearchForm extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col md="5">
            <Label>What</Label>
            <Input/>
          </Col>
          <Col md="5">
            <Label>Where</Label>
            <Input/>
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

VenueSearchForm.propTypes = {};
VenueSearchForm.defaultProps = {};

export default VenueSearchForm;
