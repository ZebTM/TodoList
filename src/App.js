import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import TodoList from './Components/TodoList';
import AddItem from './Components/AddItem';
import DeleteItem from './Components/Delete';
import EditItem from './Components/EditItem';

const App = () => {
    
    



    return (
       
        <div className="ui container">
            
            <button className="ui button"><Link to="/addItem"><i className="icon plus"></i></Link></button>
            
            <hr />  
            <Switch>
                <Route path ="/todos/:id/edit">
                    <EditItem />
                </Route>
                <Route path ="/todos/:id/delete">
                    <DeleteItem />
                </Route>
                <Route path="/todos/:id">
                    <TodoList />
                </Route>
                
                <Route path="/todos">
                    <TodoList />
                </Route>
                
                <Route path="/addItem">
                    <AddItem />
                </Route>
                <Route path="/">
                    <TodoList />
                </Route>
                
            </Switch>

        </div>

    );
}


export default App;