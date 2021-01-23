import React from 'react';

class BoardShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    if (!this.props.board) return null;
  
    return (
      <div className="board-show-container">
        <h1>{this.props.board.board_name}</h1>
      </div>
    );
  }
}

export default BoardShow;