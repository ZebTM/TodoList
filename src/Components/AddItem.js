import axios from 'axios';
import React, {useState, useEffect} from 'react';

const AddItem = () => {
    const [item, setItem] = useState(null);
    const baseURL = "https://localhost:5001/todos";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItem(response.data);
        });
    }, []);

    const createItem = () => {
        axios
        .post(baseURL, {
            name: "Test",
            dueDate: "2021-12-25T12:00Z",
            isComplete: false
        })
        .then((response) => {
            setItem(response.data);
        });
    }

    if(!item) return "No item";

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.dueDate}</p>
            <button onClick={createItem}>Create Item</button>
        </div>
    );
}


export default AddItem;