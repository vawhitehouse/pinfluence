import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardShow from './board_show';


const mapStateToProps = ({ entities }, ownProps) => {
  // debugger
  return {
    board: entities.boards[ownProps.match.params.boardId],
    pins: entities.pins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);