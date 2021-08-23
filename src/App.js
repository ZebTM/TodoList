import React from 'react';
import TodoList from './Components/TodoList';
import Route from './Components/Route';

const App = () => {
    return (
        <div className="ui container">
            <button className="ui button"><i className="icon plus"></i></button>
            <hr />  
            <Route path="/todos"> 
                <TodoList />
            </Route> 
        </div>

    );
}


export default App;