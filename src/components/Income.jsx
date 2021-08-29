import React, {useState} from "react";
import ButtonIncome from "./Button";


function Income ({setParentCounter}){

    const [income, setIncome] = useState({
        income:2000
    })

    function handleChangeInputText(event){
        const {name, value} = event.target;
        setIncome(prevIncome => {
          return {
            ...prevIncome,
            [name]:value
          };
      
        });
      
        setParentCounter(prevIncome => {
          return {
            ...prevIncome,
            [name]:value
          };
      
        });
      
      
      }

    return(

       
      <div>
        <h1 className="step-guide">Step 1 : Please Enter your Income in RM </h1>
       <div className="income-grid">
                <div className="card-income">
          
                <div className="text-input-income">
                  <input type="text" onChange= {handleChangeInputText} name="income" value={income.income}/>
                </div>
               
               
                
                <div>
                  <ButtonIncome></ButtonIncome>
               {/*  <button className="button-income">Next </button> */}
                </div>
                </div>
               
            </div>



      </div>
     

        
  
    )
}

export default Income;
