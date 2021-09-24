import React from 'react'
function Lists(){
    const array=['a','b','c','d','e']
   const arr1= array.map((num)=>{
      return <li> {num}</li>
});
   
  
    return(

    <div>
  <ul> items are:{arr1}</ul>
    </div>
    )
}
export default Lists