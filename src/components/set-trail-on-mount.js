import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTrail } from '../actions';


export default function setTrailOnMount(trail) {
  return (Component) => {
    class SetTrail extends React.Component {
      static propTypes = {
        set: PropTypes.func.isRequired,
      }

      componentWillMount() {
        this.props.set();
      }

      render() {
        return <Component />;
      }
    }

    return connect(null, dispatch => ({
      set: () => dispatch(setTrail(trail)),
    }))(SetTrail);
  };
}
