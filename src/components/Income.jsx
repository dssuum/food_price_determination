import React, {useState} from "react";
import ButtonIncome from "./Button";


function Income ({setParentCounter}){

  

    const [income, setIncome] = useState({
        income:2000
    })

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

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
        
       <div className="income-grid">
                <div >
          
                <div className="card-income">
                  <input type="text" onChange= {handleChangeInputText} name="income" value={income.income}/>
                </div>
               
                <div>
                {/* <button className="button-income">Next </button> */}
                </div>
                </div>
               
            </div>



      </div>
     

        
  
    )
}

export default Income;
