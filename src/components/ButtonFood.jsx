import React, { useState } from 'react';
import './App.css';

function ButtonFood(props){
console.log(props)

return(
<div>
<button className="button-next" onClick={ ()=> props.changeTab(5)}>

Next
</button>
</div>

)


}

export default ButtonFood;