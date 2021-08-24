import React, { useState, useEffect} from 'react';

import axios from 'axios';


import TodoItem from './TodoItem';

// 

const TodoList = () => {
    const baseURL = "https://localhost:5001/todos";
    const [items, setItems] = useState(null);
    

    // Uses useEffect to request the data from API
    // Then uses State to set the response to items
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItems(response.data);
        })
    }, []);
    
    // Checks if there was nothing sent
    if (!items) return null;
    
    // Uses a map function to call TodoItem over and over again: item is a single object from the array
    const RenderedList = items.map(item => {
        return (
                <TodoItem item={item} key={item.id}/>
        );
    });

    
    return (
        <div>
            {RenderedList}
        </div>
    );
}


export default TodoList;