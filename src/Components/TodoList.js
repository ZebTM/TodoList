import React, { useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';


const TodoList = () => {
    const baseURL = "https://localhost:5001/todos";
    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItems(response.data);
        })
    }, []);

    if (!items) return null;
    
    const RenderedList = items.map(item => {
        return <TodoItem item={item} key={item.id}/>
    })
    
    
    console.log(items)
    return (
        <div className="ui relaxed list">
            {RenderedList}
        </div>
        
    );
}


export default TodoList;