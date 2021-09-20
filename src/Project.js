import React    from 'react'
import './index.css'
import Challenge3 from './Challenge3';


function Project() {
    const name = 'shabnam'
    const lname = 'rani'
    
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const img1 = "https://picsum.photos/200/300";
    const img2= "https://picsum.photos/200/300";
    const links = "https://www.thapatechnical.com";
    const heading = {
        color:'blue',
  textAlign:'center',
  textTransform:'capatilize'
    }

    return (
        <Challenge3>
            <h1 style={ heading} >{`My name is ${name} ${lname}`}</h1>
            <div className="img">
            <img src ={img1} alt="picsum"/>
            
            <a href={links} target="_thapa">
            <img src ={img2} Alt="AVATAR"/>
            </a>
            </div>
        <p>{`current dateis: ${currentDate}`}</p>
            <p>{`current time:${currentTime}`}</p>
        </Challenge3>

    )
};
export default Project;
