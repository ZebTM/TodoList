import React, { useEffect, useState} from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    {/*
        Map out the array of all the Todo Items
        Use the GetAll
    const renderedList = () => {
        return (
            <VideoItem />
        );
    }
    */}
    return (

        <div>
            Todo List 
            <TodoItem name="TF2 Tournament" dueDate="2021-08-19T06:39:57Z"/>
        </div>
    );
}


export default TodoList;