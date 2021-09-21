import React,{useState} from 'react'

function Form() {
    const [name,setName] = useState("shabnam");
    const [fullName, setFullName] = useState();
    const inputEvent=(event)=>{
        
        setName(event.target.value);
    };
    const onSubmit=()=>{
setFullName(name)
    };
    return (
        <div>
            <h1>Hello,{fullName}</h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent}
            value={name}/><br/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Form
