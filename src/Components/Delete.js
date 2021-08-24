import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const DeleteItem = () => {
    let { id } = useParams();
    const [todo, setTodo] = useState(null);
    const baseURL = `https://localhost:5001/todos/${id}/delete`;

    useEffect(() => {
        axios.get(`https://localhost:5001/todos/${id}`).then((response) => {
            setTodo(response.data);
        })
    }, []);

    const deleteTodo = () => {
        axios
            .delete(`https://localhost:5001/todos/${id}`)
            .then(() => {
                alert("Post deleted");
                setTodo(null)
            });
    }

    if (!todo) return "No post!"


    return (
    <div>
        <h1>{todo.name}</h1>
        <p>{todo.dueDate}</p>
        <button onClick={deleteTodo}>Delete Todo</button>
    </div>
    )
}


export default DeleteItem;