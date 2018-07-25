import React from 'react';
import PropTypes from "prop-types"
import {canUseGeoLocation} from "../../helpers/geoLocationHelper"
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap"

const LocationInput = ({ll, near, onChange}) => {
  const usesUserLocation = ll !== null
  const value = (!usesUserLocation) ? near : "[Your location]"

  const onChangeNearValue = (event) => {
    onChange({
      ll: null,
      near: event.target.value
    })
  }

  const input = <Input disabled={usesUserLocation} value={value} onChange={onChangeNearValue}/>

  const onLocateUser = (event) => {
    event.preventDefault()

    navigator.geolocation.getCurrentPosition((location) => {
      onChange({
        ll: `${location.coords.latitude},${location.coords.longitude}`,
        near: ""
      })
    })
  }

  const onClearLocation = (event) => {
    event.preventDefault()
    onChange({
      ll: null,
      near: ""
    })
  }

  const renderClearButton = () => {
    if (!usesUserLocation) {
      return null
    }

    return <Button color="primary" onClick={onClearLocation}>X</Button>
  }

  if (!canUseGeoLocation()) {
    return input
  }

  return <InputGroup>
    {input}
    <InputGroupAddon addonType="append">
      {renderClearButton()}
      <Button onClick={onLocateUser}>Locate</Button>
    </InputGroupAddon>
  </InputGroup>
};

LocationInput.propTypes = {
  ll: PropTypes.any,
  near: PropTypes.string,
  onChange: PropTypes.func
};
LocationInput.defaultProps = {};

export default LocationInput;
