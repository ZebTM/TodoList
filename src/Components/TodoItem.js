import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    var determineButton = () => {
        return "circle outline";

    }
    return (
        <div className="item">  
            <button className="ui button"><i className={determineButton}></i></button>
            <div className="content">
                {props.item.name}
                <div className="description">{props.item.dueDate}</div>
            </div>
        </div>
        
        
    );
}

export default TodoItem;