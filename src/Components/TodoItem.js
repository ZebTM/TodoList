import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ item }) => {
    // On Click of a todo item 
    
    return (
        <li>
            <div className="item">  
                <button className="ui button">Completion</button>
                <div className="content">
                <Link to={`/todos/${item.id}`}>
                    {item.name}
                    <div className="description">{item.dueDate}</div>
                </Link>
                <Link to={`/todos/${item.id}/edit`}>
                    <button className="ui button">Edit</button>
                </Link>
                <Link to={`/todos/${item.id}/delete`}>
                    <button className="ui button">Delete</button>
                </Link>
                </div>
                <hr></hr>
            </div>
        </li>
        
    );
}

export default TodoItem;