import { connect } from 'react-redux';
import React from 'react';
import { fetchPin, savePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
   
  return {
    pin: state.entities.pins[ownProps.match.params.pinId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    savePin: (pin) => dispatch(savePin(pin)),
    // openModal: () => dispatch(openModal('show')),
    // closeMOdal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);