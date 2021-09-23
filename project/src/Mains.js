
import React, { useState } from 'react'
import Todo from './Todo'
import './Todo.css'


function Mains() {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvents = (event) => {
        setInputList(event.target.value);
    };
    const buyItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
    }

    console.log(items)
    const newitems=items.map((item)=><li>{item}</li>)
    return (
       

        <div className="main">
            <div className="center">
                <br />
                <h1>ToDolist</h1><br />
                <input type="text" placeholder="Add items" value={inputList} onChange={itemEvents} />
                <button onClick={buyItems}>+</button>
                <ol>
               <Todo text= {newitems}/>
                </ol>    
            </div>

        </div>

    )
}

export default Mains
