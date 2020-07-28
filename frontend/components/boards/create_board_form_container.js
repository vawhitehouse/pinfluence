import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard } from '../../actions/board_actions';
import CreateBoardFrom from './create_board_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  errors: Object.values(state.errors.board)
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)), 
  openModal: () => dispatch(openModal('createBoard')),
  closeMOdal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardFrom));
