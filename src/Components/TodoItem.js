import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const TodoItem = (props) => {
    
    return (
        <li>
            <div className="item">  
                <button className="ui button">Completion</button>
                <div className="content">
                <Link to={`/todos/${props.item.id}`}>
                    {props.item.name}
                    <div className="description">{props.item.dueDate}</div>
                </Link>
                <Link to={`/todos/${props.item.id}/edit`}>
                    <button className="ui button">Edit</button>
                </Link>
                <Link to={`/todos/${props.item.id}/delete`}>
                    <button className="ui button">Delete</button>
                </Link>
                </div>
                <hr></hr>
            </div>
        </li>
        
    );
}

export default TodoItem;