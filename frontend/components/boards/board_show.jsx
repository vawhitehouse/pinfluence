import React from 'react';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    if (!this.props.board) return null;

    const { board, pins } = this.props;
    
    const pinItems = Object.values(pins).map((pin) => (
      <PinIndexItem pin={pin} key={pin.id} />
    ));
  
    return (
      <div className="board-show-container">
        <h1>{board.board_name}</h1>
        {pinItems}
      </div>
    );
  }
}

export default BoardShow;