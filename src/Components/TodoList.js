import React, { useState, useEffect} from 'react';

import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import TodoItem from './TodoItem';
import EditItem from './EditItem';
import AddItem from './AddItem';


const TodoList = () => {
    const baseURL = "https://localhost:5001/todos";
    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItems(response.data);
        })
    }, []);
    
    if (!items) return null;
    
    const RenderedList = items.map(item => {
        return (
                <TodoItem item={item} key={item.id}/>
        );
    });
    
    
    
    
    return (
        <Switch>
            <Route path ="/todos/:id/edit">
                <EditItem />
            </Route>

            <Route path="/todos/:id">
                    <TodoItem item={items} key={items.id} />
                </Route>

                <Route path="/add">
                    <AddItem />
                </Route>

                <Route path="/todos">
                    {RenderedList}
                </Route>
            
                <Route path="/">
                    {RenderedList}
                </Route>
                
            </Switch>
       
    );
}


export default TodoList;