import React from 'react';
import VenueListItem from "./VenueListItem"

const VenueList = ({venues}) => {
  const renderListItems = venues.map(venue => {
    return <VenueListItem
      key={venue.id}
      venue={venue}
    />
  })

  if (venues.length === 0) {
    return null
  }

  return (
    <div className="venue-list card-list">
      <h3>Search results</h3>
      {renderListItems}
    </div>
  );
};

VenueList.propTypes = {};
VenueList.defaultProps = {};

export default VenueList;
