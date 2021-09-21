import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("shabnam");
    const [fullName, setFullName] = useState();
    const [lastName, setLastName] = useState();
    const [lastNameNew, setLastNameNew] = useState();
    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew();
    };
    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    };
    return (
        <div>
            <form onClick={onSubmit}>
                <h1>Hello,{fullName} {lastNameNew}</h1>
                <input type="text" placeholder="enter your name" onChange={inputEvent}
                    value={name} /><br />
                <input type="text" placeholder="enter your lastname" onChange={inputEventTwo}
                    value={lastName} /><br />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Form
