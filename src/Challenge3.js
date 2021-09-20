
import React from 'react'
import './index.css';
function Challenge3() {
    const currentTime = new Date().getHours();
    let greeting = '';
    const cssStyle = {};
    if(currentTime>1 && currentTime<12){
        greeting ='Good Morning';
        cssStyle.color ='Green';
    }else if(currentTime>=12 && currentTime<=19){
        greeting = 'Good Afternoon';
        cssStyle.color ='orange';

    }else{ greeting ='Good Night';
    cssStyle.color ='black';
    }
    
    return (
        <div>
            <h1>Hello sir,<span style ={cssStyle}>{greeting}</span></h1>
        </div>
    )
}
export default Challenge3
