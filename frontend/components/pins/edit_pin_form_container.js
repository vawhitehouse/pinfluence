import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditPinForm from './edit_pin_form';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions'
import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    pinId: ownProps.match.params.pinId,
    boards: Object.values(state.entities.boards)
  })
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPinForm));