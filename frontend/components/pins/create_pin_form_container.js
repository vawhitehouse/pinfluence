import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllBoards } from '../../actions/board_actions';
import { createPin } from '../../actions/pin_actions';
import CreatePinForm from './create_pin_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: Object.values(errors.pin),
    boards: Object.values(entities.boards)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    openModal: (modal) => dispatch(openModal(modal))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePinForm));