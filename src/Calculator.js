import React from 'react'

 function Calculator(a,b) {
     let sum = (a+b);
     let sub =(a-b);
     
    return (
        <div>
            <li>sum is:{sum(4,5)}</li>
            <li>sub is:{sub(45,13)}</li>
        </div>
    )
}
export default Calculator
