import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import TodoItem from './TodoItem';

const SingleTodoItem = () => {
    // Gets ID from URL
    let { id } = useParams();
    // Creates baseURL with the specific ID
    let baseURL = `https://localhost:5001/todos/${id}`;
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItem(response.data);
        })
    }, []);
    
    if (!item) return null;


    return (
        <div>
            <TodoItem item={item} key={id}/>
            
        </div>
    );
};


export default SingleTodoItem;