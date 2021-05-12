import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import BoardDropdown from '../boards/board_dropdown';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToIndex: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.pin;
    
  }
  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId).then(res => {
      this.setState({ pin: {
        title: res.pin.title,
        link: res.pin.link,
        description: res.pin.description,
        copiedPinId: res.pin.id,
        boardId: null
      }})
    });
    this.props.fetchAllBoards();
  }

  handleSave(e) {
    e.preventDefault();
    this.props.savePin({pin: this.state.pin})
      .then(() => this.props.history.push('/'))
  }

  handleBoard() {
    return e => {
      const dropdownText = e.target.innerText
      const boardId = e.target.value
      this.setState(prevState => ({ 
        ...prevState,
        dropdownText, 
        pin: {
          ...prevState.pin,
          board_id: boardId
        } 
      }))
    };
  }

  toggleDropdown() {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  hideDropdown(e) {
    if (this.state.showDropdown) {
      this.setState({showDropdown: !this.state.showDropdown})
    };
  }

  render () {
    if (!this.props.pin) return null;
    // if (!this.props.boards) return null;

    // this.pin = {
    //   title: this.props.pin.title,
    //   link: this.props.pin.link,
    //   description: this.props.pin.description,
    //   copiedPinId: this.props.pin.id,
    //   boardId: null
    // }

    const dropdown = this.state.showDropdown ? (
      <BoardDropdown 
        boards={this.props.boards} 
        boardId={this.props.pin.board_id}
        handleBoard={this.handleBoard("board_id")}
        openModal={this.props.openModal} />
    ) : null;
    const dropdownText = !this.state.dropdownText ? (
      "Select"
      ) : (
      this.state.dropdownText
    );

    const creator = this.props.pin.creator_id === currentUser.id ? 'You' : this.props.pin.creator;

    return (
      <div className="pin-show-container" >
        <Link to="/">
          <div className="pin-show-arrow-container">
            <i className="fas fa-arrow-left"></i>
          </div>
        </Link>
        <div className="pin-show-box-container">
          <div className="pin-show-box">
            <div className="pin-show-grid">
              <img src={this.props.pin.imageUrl} alt={this.props.pin.title} className="pin-show-image" />
              <div className="pin-show-left">
                <div className="pin-show-left-top">
                  <div>
                    <Link to={`/pins/${this.props.pin.id}/edit`}>
                    <div className="pin-show-edit-button">
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    </Link>
                  </div>
                  <div className="pin-show-select-save-container">
                    
                    <div 
                      className="board-dropdown" 
                      onClick={this.toggleDropdown}
                      onBlur={this.hideDropdown} 
                      tabIndex={0}>
                      <p className="dropdown-select">{dropdownText}</p>
                      {dropdown}
                    </div>
                    <button onClick={this.handleSave} className="pin-show-save-button">Save</button>
                  </div>
                </div>
                <div className="pin-show-left-middle">
                  <a className="pin-show-link">
                    {this.props.pin.link}
                  </a>
                  <h4 className="pin-show-title">
                    {this.props.pin.title}
                  </h4>
                  <p className="pin-show-description">
                    {this.props.pin.description}
                  </p>
                </div>
                <div className="pin-show-left-bottom">
                  <div className="pin-show-board-section">
                    <Link to={`/users/${this.props.pin.creator_id}`} className="creator-link">{creator}</Link>
                    <p> saved to </p>
                    <Link to={`/boards/${this.props.pin.board_id}`} className="board-link">{this.props.pin.board_name}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);