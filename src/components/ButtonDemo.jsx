import React, { useState } from 'react';
import './App.css';

function ButtonDemo(props){
console.log(props)

return(
<div>
<button className="button-next" onClick={ ()=> props.changeTab(4)}>

Next
</button>
</div>

)


}

export default ButtonDemo;