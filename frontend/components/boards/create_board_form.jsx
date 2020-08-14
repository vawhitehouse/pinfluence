import React from 'react';
import { Link } from 'react-router-dom';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_name: '',
      private: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
  }

  render() {

    return (
      <div className="create-board-container">
        <div className="create-board-form-box">
          <form onSubmit={this.handleSubmit}>

            <div className="create-board-header">
              <h4>Create board</h4>
            </div>

            {/* <div className="create-board-line"></div> */}

            <div  className="create-board-name-container">
              <h6 className="create-board-input-title">Name</h6>
              <input 
                type="text" 
                className="create-board-name-input"
                placeholder={`Like "Places to Go" or "Recipes to Make`}
                value={this.props.board_name}
                onChange={this.update('board_name')}
              />
            </div>

            {/* <div className="create-board-line"></div> */}

            <div className="create-board-visibility-container">
              <h6 className="create-board-input-title">Visibiltiy</h6>
              <input 
                type="checkbox" 
                className="create-board-visibility-checkbox" />
              <p>Keep this board secret</p>
            </div>

            {/* <div className="create-board-line"></div> */}

            <Link to="/"><div className="create-board-cancel">Cancel</div></Link>
            <input type="submit" value="Create" className="create-board-submit" />

          </form>
        </div>

      </div>
    )
  }
}

export default CreateBoardForm;
