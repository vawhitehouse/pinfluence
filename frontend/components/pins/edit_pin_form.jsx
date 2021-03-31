import React from 'react';
import { Redirect } from 'react-router-dom';
import BoardDropdown from '../boards/board_dropdown';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: '',
      title: '',
      description: '',
      id: '',
      imageUrl: '',
      link: '',
      redirectToShow: false,
      redirectToIndex: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.redirectToShow = this.redirectToShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId)
      .then(() => {
        this.setState({
        title: this.props.pin.title,
        description: this.props.pin.description,
        id: this.props.pin.id,
        imageUrl: this.props.pin.imageUrl,
        link: this.props.pin.link,
      });
    });
    this.props.fetchAllBoards();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state)
      .then(this.setState({ redirectToShow: true }));
  }

  handleDelete(e) {
    this.props.deletePin(this.props.pin.id)
      .then(this.setState({ redirectToIndex: true }));
  }

  redirectToShow(e) {
    e.preventDefault();
    this.setState({ redirectToShow: true });
  }

  render() {
    if (!this.props.pin || !this.props.boards) return null;

    if (this.state.redirectToShow) {
      return (
        <Redirect to={`/pins/${this.props.pin.id}`} />
      )
    }

    if (this.state.redirectToIndex) {
      return (
        <Redirect to='/' />
      )
    }

    // const boardOptions = this.props.boards.map((board) => {
    //   return <option value={board.id} key={board.id}>{board.board_name}</option>
    // });
    
    return (
      <div className="edit-pin-container">
        <div className="edit-pin-form-box-container">
          <div className="edit-pin-form-box">

            <div className="edit-pin-header">
              <h3>Edit this Pin</h3>
            </div>

            <form onSubmit={this.handleSubmit} className="edit-pin-form">
              <div className="edit-form-mid-grid">
                <div className="edit-pin-image-container">
                  <img src={this.props.pin.imageUrl} alt={this.state.title} className="edit-pin-image" />
                </div>
                <div className="edit-pin-inputs-container">
                  <div className="edit-pin-title-container">
                    <input 
                      type="text" className="edit-pin-title-input" 
                      value={this.state.title || ''} 
                      placeholder="Title" 
                      onChange={this.update('title')}/>
                  </div>
                  <div className="edit-pin-description-container">
                    <textarea 
                      className="edit-pin-description-input" 
                      value={this.state.description || ''} 
                      placeholder="Description" 
                      onChange={this.update('description')}/>
                  </div>
                  </div>
              </div>
              <div className="edit-pin-grid-bottom">
                <div className="edit-pin-delete" onClick={this.handleDelete}>Delete</div>
                <div className="edit-pin-cancel-save">
                  <div className="edit-pin-cancel" onClick={this.redirectToShow}>Cancel</div>
                  {/* <select 
                    name="board" 
                    defaultValue={this.props.pin.board_id} 
                    className="edit-pin-select-button" 
                    onChange={this.update('board_id')}>
                    <option value="select" disabled>Select</option>
                    {boardOptions}
                  </select> */}
                  <BoardDropdown 
                    boards={this.props.boards} 
                    boardId={this.props.pin.board_id}
                    handleBoard={this.update('board_id')}/>
                  <input type="submit" value="Save" className="edit-pin-update-button" />
                </div>
              </div>
            </form>

            
          </div>
        </div>
      </div>

    )
  }
}

export default EditPinForm;
