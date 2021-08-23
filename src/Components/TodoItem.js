import React, { useEffect, useState } from 'react';


const TodoItem = (props) => {
    
    return (
        <div className="item">  
            <button className="ui button">Completion</button>
            <div className="content">
                {props.item.name}
                <div className="description">{props.item.dueDate}</div>
                <button className="ui button">Edit</button>
                <button className="ui button">Delete</button>
            </div>
            <hr></hr>
        </div>
        
        
    );
}

export default TodoItem;