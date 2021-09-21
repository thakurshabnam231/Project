import React,{useState} from 'react';
function Time()
{
    let time = new Date().toLocaleTimeString();
    const [cTime,setCtime] = useState(time);
    const UpdateTime=()=>{

    
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);
    
    return(
        <div>
       <h1> {cTime} </h1>
       
    

</div>
    )
}

export default Time