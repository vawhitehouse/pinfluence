import React from 'react';

const BoardDropdown = (props) => {
  const boardOptions = props.boards.map((board) => {
    return <option value={board.id} key={board.id}>{board.board_name}</option>
  });

  const selected = props.boardId ? props.boardId : 'select';

  return (
    <>
      <select 
        name="board" 
        defaultValue={selected} 
        className="select-dropdown" 
        onChange={props.handleBoard}>
        <option value="select" disabled>Select</option>
        {boardOptions}
      </select>
    </>
  )
}

export default BoardDropdown;