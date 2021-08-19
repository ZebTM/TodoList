import React, { useEffect, useState } from 'react';
import TodoItems from './TodoItems.css';

const TodoItem = ({name, dueDate}) => {
    return (
        <div>  
            {/* Need to align this button to the left*/}
            <button className="ui button"><i className="circle outline icon"></i></button>
            {/* This text needs to be centered */}
            {name}   {dueDate}
            {/* These buttons need to be left aligned */}
            <div className="ui icon buttons right" >
                <button className="ui button"><i className="edit icon"></i></button>
                <button className="ui button"><i className="close icon"></i></button>
            </div>
        </div>
        
        
    );
}

export default TodoItem;