import { useState } from "react";
export const TodoForm = ({saveData}) => {
    const [inputData, setData] = useState({});

    const handleInputValue = (value)=>{
        setData({id:value, content: value, checked: false})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        saveData(inputData)
        setData({id:"", content:"", checked:false})

    }

  return (
    <section className="form">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputData.content}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
