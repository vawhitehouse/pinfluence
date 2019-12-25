import React from 'react';
import { Link } from 'react-router-dom';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: '',
      private: false,
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
        <div className="creat-board-form-box">
          <form onSubmit={this.handleSubmit}>

            <div className="create-board-header">
              <h4>Create Board</h4>
            </div>

            <div className="create-board-line"></div>

            <div  className="create-board-name-container">
              <h6 className="create-board-input-title">Name</h6>
              <input type="text" 
                placeholder={`Like "Places to Go" or "Recipes to Make`}
                value={this.props.boardName}
                onChange={this.update('boardName')}
              />
            </div>

            <div className="create-board-line"></div>

            <div className="create-board-visibility-container">
              <h6 className="create-board-input-title">Visibiltiy</h6>
              <input type="checkbox" className="create-board-visibility-checkbox" />
              <p>Keep this board secret</p>
            </div>

            <div className="create-board-line"></div>

            <Link to="/"><div className="create-board-cancel">Cancel</div></Link>
            <input type="submit" value="Create" className="create-board-submit" />

          </form>
        </div>

      </div>
    )
  }
}

export default CreateBoardForm;
