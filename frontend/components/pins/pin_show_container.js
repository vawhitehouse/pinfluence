import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPin, savePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinShow from './pin_show';
import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    boards: Object.values(state.entities.boards)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    savePin: (pin) => dispatch(savePin(pin)),
    openModal: (pinId) => dispatch(openModal(pinId)),
    closeMOdal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));