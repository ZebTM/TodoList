import React from 'react';
import TodoList from './TodoList';


const App = () => {
    return (
        <div className="ui container">
            <button className="ui button"><i className="icon plus"></i></button>
            <hr />    
            <TodoList />
        </div>

    );
}


export default App;