import React,{useState} from 'react'

function Temp() {
    const [name,setName]=useState(0)
    console.log(name)
    const click =()=>{
        setName(name+1)
    }

    return (
        <div>
        
            <h1>{name}</h1>
            <button onClick={click}> click</button>
        </div>
    )
}

export default Temp
