import React from 'react';
import PropTypes from "prop-types"
import Venue from "../../models/Venue"

const VenueListItem = ({venue}) => {
  const renderIcon = () => {
    if (!venue.hasIcon()) {
      return null
    }

    return <img src={venue.icon} alt={venue.name}/>
  }

  return (
    <div className={"venue-list__item card-list__item"}>
      <div className="card-list__item__content">
        <div className="card-list__icon">
          <div className="card-list__icon__inner">
            {renderIcon()}
          </div>
        </div>
        <div className="card-list__description">
          <h3>{venue.name}</h3>
          <ul className="meta-list">
            <li>Address: {venue.address}</li>
            <li>Categories: {venue.getCategoriesLabel()}</li>
          </ul>
          <a className="btn btn-secondary btn-sm" target="_blank" href={venue.url}>
            Show details
          </a>
        </div>
      </div>
    </div>
  );
};

VenueListItem.propTypes = {
  venue: PropTypes.instanceOf(Venue).isRequired
};
VenueListItem.defaultProps = {};

export default VenueListItem;
