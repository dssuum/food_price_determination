import React, { useState } from 'react';
import './App.css';


function ButtonIncome(props){
console.log(props)

return(
<div >
<button className="button-next" onClick={ ()=> props.changeTab(3)}>

Next
</button>
</div>

)


}

export default ButtonIncome;