import React from 'react'
import PropTypes from 'prop-types'

const Content = ({children}) => {
  return (
    <div className="app-content container">
      {children}
    </div>
  );
};

Content.propTypes = {children: PropTypes.any.isRequired};
Content.defaultProps = {};

export default Content;
