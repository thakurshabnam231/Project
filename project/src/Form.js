import React, { useState } from 'react'

function Form() {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        number: '',
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const { name, value } = event.target;

        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]:value,
            }
    //         if (name === 'fName') {
    //         return {
    //                  fname: value,
    //                  lname: preValue.lname,
    //                  email: preValue.email,
    //                  number: preValue.number,
    //              };
    //         }
    //         else if (name === 'lName') {
    //             return {
    //                 fname: preValue.fname,
    //                 lname: value,
    //                 email: preValue.email,
    //                 number: preValue.number,
    //             };
    //         }
    //         else if (name === 'email') {
    //             return {
    //                 fname: preValue.fname,
    //                 lname: preValue.lname,
    //                 email: value,
    //                 number: preValue.number,
    //             };
    //         }
    //         else if (name === 'number') {
    //             return {
    //                 fname: preValue.fname,
    //                 lname: preValue.lname,
    //                 email: preValue.email,
    //                 number: value,
    //             };
    //         }
        

       }
        );
     };
        const formSubmit = (event) => {
            event.preventDefault();
            alert("form submitted");

    
          };
        return (
            <div>
                <form onSubmit={formSubmit}>
                    <h1>Hello,{fullName.fname}{fullName.lname}</h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.number}</p>
                    <input type="text" placeholder="enter your name" name="fname" onChange={inputEvent}
                        value={fullName.fname}
                    /><br />
                    <input type="text" placeholder="enter your lastname" name="lname" onChange={inputEvent}
                        value={fullName.lname}
                    /><br />
                    <input type="text" placeholder="enter your email" name="email" onChange={inputEvent}
                        autocomplete="off"
                        value={fullName.email}
                    /><br />
                    <input type="text" placeholder="enter your mobileno." name="number" onChange={inputEvent}
                        value={fullName.number}
                    /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        
        )

        
      };
    export default Form
