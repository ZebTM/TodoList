import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    return (
        <div>  
            
            
            
            {props.item.name}
            {props.item.dueDate}
           
        </div>
        
        
    );
}

export default TodoItem;