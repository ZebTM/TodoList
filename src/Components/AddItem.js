import axios from 'axios';
import React, {useState, useEffect} from 'react';
import DateAndTimePickers from './DateTime';

import DateTime from './DateTime';
const AddItem = () => {
    // Sets up state and baseURL to be used
    const [item, setItem] = useState(null);

    const [todo, setTodo] = useState({
        name: '',
        dueDate: '2021-01-25T12:00Z',
        isComplete: false
    });

    const baseURL = "https://localhost:5001/todos";
  

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItem(response.data);
        });
    }, []);

    const createItem = () => {
        axios
        .post(baseURL, {
            name: "( ͡° ͜ʖ ͡°) ",
            dueDate: "2021-12-25T12:00Z",
            isComplete: false
        })
        .then((response) => {
            setItem(response.data);
        });
    }

    const handleNameInputChange = (event) => {
        event.persist();
        setTodo((todo) => ({
            ...todo,
            name: event.target.value,
        }));
    }
    const handleDueDateInputChange = (event) => {
        event.persist();
        setTodo((todo) => ({
            ...todo,
            dueDate: event.target.value,
        }));
    }
    


    if(!item) return "No item";

    return (
        <div>
            <form>
                <label>
                    Title:
                    <input onChange={handleNameInputChange} placeholder="Name" type="text" value={todo.name} />
                </label>
                <input type="submit" value="submit" />
            </form>
            <hr />
            <DateAndTimePickers date={todo.dueDate}/>
            <h1>{item.name}</h1>
            <p>{item.dueDate}</p>
        <button onClick={createItem}>Create Item</button>
            
        </div>
    );
}


export default AddItem;