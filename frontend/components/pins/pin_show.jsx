import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToIndex: false
    }
    
    // this.redirectToIndex = this.redirectToIndex.bind(this);
    this.handleSave = this.handleSave.bind(this);
    // this.getBoards = this.getBoards.bind(this);
    this.currentPin;
    
  }
  componentDidMount() {
    
    this.props.fetchPin(this.props.match.params.pinId);
    // this.props.fetchAllBoards();
  }

  // redirectToIndex() {
  //   this.setState({ redirectToIndex: true })
  // }

  handleSave(e) {
    e.preventDefault();
    this.props.savePin(this.currentPin)
      // .then(this.redirectToIndex())
      .then(this.props.history.push('/'))
  }

  // getBoards() {
  //   console.log(this.props.boards)
  //   debugger
  //   this.props.boards.map(board => (
  //       <option value={board.board_name} key={board.id}>{board.board_name}</option>
  //     )
  //   );
  // }

  render () {
    if (!this.props.pin) return null;
    // if (!this.props.boards) return null;

    this.currentPin = {
      pin: {
        title: this.props.pin.title,
        link: this.props.pin.link,
        description: this.props.pin.description,
        copiedPinId: this.props.pin.id,
        // remove after board 
        // board_id: 1
      }
    }

    const creator = this.props.pin.creator_id === currentUser.id ? 'You' : this.props.pin.creator;
    // if (this.state.redirectToIndex) {
    //   return (
    //     <Redirect to="/" />
    //   )
    // }
    // debugger

    return (
      <div className="pin-show-container" >
        {/* onClick={this.redirectToIndex} */}
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
                      {/* ^onClick={() => this.props.openModal(this.props.pin.id)} */}
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    </Link>
                  </div>
                  <div className="pin-show-select-save-container">
                    <div className="pin-show-select-button">Select</div>
                    {/* <select name="boards">
                      <option value="" selected disabled hidden>Select</option>
                      <option value="board1">board1</option>
                      <option value="board2">board2</option>
                      <option value="board3">board3</option>
                      {this.getBoards()}
                    </select> */}
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

          {/* <Link to={`/pins/${props.pin.id}/edit`}>Edit</Link> */}
          {/* <button onClick={() => props.deletePin(props.pin.id)}>Delete</button> */}
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);