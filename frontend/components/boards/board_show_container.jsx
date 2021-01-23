import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchAllPins } from '../../actions/pin_actions';
import BoardShow from './board_show';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    board: entities.boards[ownProps.match.params.boardId],
    pins: entities.pins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);