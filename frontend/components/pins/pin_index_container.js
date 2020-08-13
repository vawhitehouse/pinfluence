import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinIndex from './pin_index';

const mapStateToProps = (state) => ({
  pins: Object.values(state.entities.pins)
})

const mapDispatchToProps = dispatch => ({
  fetchAllPins: pins => dispatch(fetchAllPins(pins)),
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  openModal: () => dispatch(openModal('editPin')),
  closeMOdal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinIndex));