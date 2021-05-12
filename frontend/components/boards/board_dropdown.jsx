import React from 'react';

const BoardDropdown = (props) => {
  const boardOptions = props.boards.map((board) => {
    return (
      <li value={board.id} key={board.id} onClick={props.handleBoard}>
        {board.board_name}
      </li>
    );
  });

  return (
    <div className="board-options-container">
      <p>All boards</p>
      <ul>
        {boardOptions}
      </ul>
      <div className="horizontal-line"></div>
      <div onClick={() => props.openModal("createBoard")}>
        <i className="fas fa-plus-circle"></i>
        <p>Create board</p>
      </div>
    </div>
  )
}

export default BoardDropdown;






// import React from 'react';

// const BoardDropdown = (props) => {
//   const boardOptions = props.boards.map((board) => {
//     return <option value={board.id} key={board.id}>{board.board_name}</option>
//   });

//   const selected = props.boardId ? props.boardId : 'select';

//   return (
//     <>
//       <select 
//         name="board" 
//         defaultValue={selected} 
//         className="select-dropdown" 
//         onChange={props.handleBoard}>
//         <option value="select" disabled>Select</option>
//         {boardOptions}
//         <option className="create-board-option" value="" onClick={() =>props.openModal('createBoard')}>
//           <i className="fas fa-plus-circle"></i>
//           <p>Create board</p>
//         </option>
//       </select>
//     </>
//   )
// }

// export default BoardDropdown;