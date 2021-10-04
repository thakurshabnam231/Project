import React, { useState } from 'react'

function Form2() {
    const [value, setValue] = useState('');
    const [name, setName] = useState();
    const inputEvent = (event) => {
        setName(event.target.value);
    };

    const onSubmit = () => {

        setValue('');
    };
    
return (
    <div>
        <h1>hello,{value}{name}</h1>
        <input type="text" placeholder="enter your name" onChange={inputEvent}
            value={value} /><br />
        <button onClick={onSubmit}>submit</button>

    </div>
)
}

export default Form2
