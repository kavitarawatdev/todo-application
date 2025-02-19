import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { useState } from "react";

export const TodoList = ({data, checked, deleteItem, checkedItem}) => {
    return (
    <li className="todo-item">
      <span
      className={checked?"checked":"not-checked"}
      >
        {data}
     </span>
      <button
      className="check-btn"
      onClick={()=>checkedItem(data)}
      >
        <FaCheck />
      </button>
      <button className="delete-btn" onClick={()=>deleteItem(data)}>
        <AiFillDelete />
      </button>
    </li>
  );
};
