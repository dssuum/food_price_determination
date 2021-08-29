import React, {useState} from "react";


function MainPage (){



    return(

        <div className="MainPage">

            <h1>Welcome!</h1>
            <p1>The system is designed for food policy-maker to make price determination based on income group and demography profile</p1>
            <p1> There are 4 steps that need to made, to get the total food expenditure </p1>

            <div className="step-block">
                <div className="step-item">
                    <div className ="header-step">Step 1</div>
                    <div>Go to Tab 'Income Group' and Insert your monthly Income in RM</div>

                </div >
                <div className="step-item">
                    <div className ="header-step">Step 2</div>
                    <div>Go to Tab 'Demography' and Fill in the demography form</div>
                </div>
                <div className="step-item">
                    <div className ="header-step">Step 3</div>
                    <div>Go to Tab 'Food Policy' and Change the food price by moving the slider to the left or right</div>
                </div>
                <div className="step-item">
                    <div>Step 4</div>
                    <div>The Result for Total Food Expenditure is displayed on the right</div>
                </div>

            </div>
       <div>
       {/* <button className="button-income">Start </button> */}
       </div>
                
           
               
            </div>

        
  
    )
}

export default MainPage;
