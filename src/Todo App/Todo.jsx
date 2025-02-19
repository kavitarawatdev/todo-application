import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

export const Todo = ()=>{
    const [task, setTask] = useState(()=>getLocalStorageData());

    const handleFormSubmit=(data)=>{
        const{id,content,checked}=data
        if(!content) return;
        const ifTaskExist= task.find((currTask)=>currTask.content===content)
        if (ifTaskExist) return;
        setTask((prevTask)=>[...prevTask, {id, content, checked}]);
    }

    setLocalStorageData(task);

    const handleDeleteButton=(val)=>{
        const updatedTask = task.filter((currTask)=> currTask.content!== val)
        setTask(updatedTask)
    }

    const handleCheckButton =(val)=>{
        const updatedTask = task.map((currTask)=>{
            if(currTask.content===val){
                return{...currTask, checked: !currTask.checked};
            }else{
                return currTask;
            }
        }) 
        setTask(updatedTask)
    }

    const handleClearButton =()=>{
        setTask([])
    }
   
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateTime/>
            </header>
            <TodoForm 
            saveData={handleFormSubmit}
            />

            <section className="task-list">
                <ul>
                    {
                        task.map((currTask)=>{
                            return(
                                <TodoList 
                                key={currTask.id}  
                                data={currTask.content} 
                                checked = {currTask.checked}
                                deleteItem={handleDeleteButton}
                                checkedItem={handleCheckButton}
                                />
                            )
                        })
                    }
                </ul>
            </section>

            <section className="clear-list">
                <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
            </section>
        </section>
    )
}