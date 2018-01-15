import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Breadcrumbs = ({ trail }) => (
  <nav className="rrb-nav">
    <ol>
      {trail.map(segment => (
        <li />
      ))}
    </ol>
  </nav>
);


Breadcrumbs.propTypes = {
  trail: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default connect(
  state => ({
    trail: state.breadcrumbs.trail,
  }),
  null,
)(Breadcrumbs);
