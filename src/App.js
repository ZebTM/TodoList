import React from 'react';
import TodoList from './Components/TodoList';
import AddItem from './Components/AddItem';
import { Route, Switch, Link } from 'react-router-dom';
import EditItem from './Components/EditItem';

const App = () => {
    
    



    return (
        <div className="ui container">
            <button className="ui button"><i className="icon plus"></i></button>
            <hr />  
            <Switch>
                <Route path ="/todos/:id/edit">
                    <EditItem />
                </Route>

                <Route path="/todos/:id">
                    <TodoList />
                </Route>
                
                <Route path="/todos">
                    <TodoList />
                </Route>
                
                <Route path="/add">
                    <AddItem />
                </Route>
                
            </Switch>

        </div>

    );
}


export default App;