const todoKey = "reactTodo";

export const setLocalStorageData = (task)=>{
    // ADD DATA TO LOCAL STORAGE
    // key and value should be string
    localStorage.setItem(todoKey, JSON.stringify(task));
}

export const getLocalStorageData =()=>{
    const initDataStored = localStorage.getItem(todoKey);
    // convert data into array
    // undefined is not valid in JSON.parse
    return !initDataStored? []:JSON.parse(initDataStored);
}