import React from 'react';
import PinIndexItem from '../pins/pin_index_item';
import { Link } from "react-router-dom";
import PinIndex from '../pins/pin_index';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  toggleDropdown() {
    // debugger
    this.setState({showDropdown: !this.state.showDropdown});
  }

  hideDropdown(e) {
    // e.preventDefault();
    if (this.state.showDropdown) {
      this.setState({showDropdown: !this.state.showDropdown})
    };
  }

  handleModal(e) {
    // e.preventDefault();
    this.props.openModal("editBoard");
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    if (!this.props.board) return null;

    const { board } = this.props;
    const pins = Object.values(this.props.pins);

    const dropdown = this.state.showDropdown ? (
      <div className="board-show-dropdown">
        <p>Board options</p>
        <ul>
          <li onClick={this.handleModal}>Edit Board</li>
        </ul>
      </div>
    ) : null;
    
    return (
      <div className="board-show-container">
        <div className="board-heading">
          <h1>{board.board_name}</h1>
          <div 
            className="board-ellipse" 
            onBlur={this.hideDropdown} 
            tabIndex={0}
            onClick={this.toggleDropdown}
            >
            {/* tabIndex={0} allows an onBlur to be used on a div */}
            <i className="fas fa-ellipsis-h"></i>
          {dropdown}
          </div>
        </div>
        <h6>{`${pins.length} Pins`}</h6>

        <PinIndex pins={pins} />

        <button className="create-pin-button">
          <Link to="/create-pin">
            <i className="fas fa-plus"></i>
          </Link>
        </button>
      </div>
    );
  }
}

export default BoardShow;