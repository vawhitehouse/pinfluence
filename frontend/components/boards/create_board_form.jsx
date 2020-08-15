import React from 'react';
import { Link } from 'react-router-dom';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_name: '',
      private: false,
      name_error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate_board_name = this.validate_board_name.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
  }

  validate_board_name() {
    if (!this.state.board_name) {
      return () => {
        return this.setState({ name_error: "Don't forget to name your board!"})
      }
    }
  }

  render() {
    const disableClass = this.state.board_name === '' ? 'disable' : '';
    const errorOutline = this.state.name_error ? 'error-outline' : '';
    debugger
    return (
      <div className="create-board-container">
        <div className="create-board-form-box">
          <form onSubmit={this.handleSubmit}>

            <div className="create-board-header">
              <h4>Create board</h4>
            </div>

            {/* <div className="create-board-line"></div> */}

            <div  className="create-board-name-container">
              <h4 className="create-board-input-title">Name</h4>
              <input 
                type="text" 
                className={`create-board-name-input ${errorOutline}`}
                placeholder={`Like "Places to Go" or "Recipes to Make`}
                value={this.props.board_name}
                onChange={this.update('board_name')}
                onBlur={this.validate_board_name()}
              />
              <p className="error">{this.state.name_error}</p>
            </div>

            {/* <div className="create-board-line"></div> */}

            <div className="create-board-secret-container">
              {/* <h6 className="create-board-input-title">Visibiltiy</h6> */}
              <div className="create-board-secret-flex">
                <h6 className="create-board-secret">Keep this board secret</h6>
                <label className="secret-switch">
                  <input type="checkbox" />
                  <span className="secret-slider"></span>
                </label>
              </div>
              <p>So only you and collaborators can see it.</p>
            </div>

            {/* <div className="create-board-line"></div> */}

            {/* <Link to="/"><div className="create-board-cancel">Cancel</div></Link> */}
            <div className="create-board-submit-container">
              <input 
                type="submit" 
                value="Create" 
                className={`create-board-submit ${disableClass}`} 
                disabled={!this.state.board_name} />
            </div>

          </form>
        </div>

      </div>
    )
  }
}

export default CreateBoardForm;
