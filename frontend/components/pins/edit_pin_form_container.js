import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditPinForm from './edit_pin_form';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
   
  return ({
  pin: state.entities.pins[ownProps.match.params.pinId]
})};

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPinForm));