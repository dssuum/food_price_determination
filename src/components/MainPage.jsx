import React, {useState} from "react";


function MainPage (){



    return(

        <div className="tab_content">

            <br></br>
            <p1>The system has been designed for food policy-maker to determine/decide the appropriate price for the selected food items based on socioeconomics profiles of the respondent.</p1><br></br>
            <p1>Furthermore, this system will give some idea to the users on the effect in food expenditure due to changes in the food prices.</p1><br></br><br></br>
            <p1> There are four(4) steps that need to made, to get the total food expenditure </p1>

            <div className="step-block">
                <div className="step-item">
                    <div className ="header-step">Step 1</div>
                    <div>Go to Tab 'Income Group' tab and Insert your monthly Income in RM</div>

                </div >
                <div className="step-item">
                    <div className ="header-step">Step 2</div>
                    <div>Go to Tab 'Demography' tab and Fill in the demography information</div>
                </div>
                <div className="step-item">
                    <div className ="header-step">Step 3</div>
                    <div>Go to Tab 'Food price determination' tab and Change the food price by moving the slider to the left or right</div>
                </div>
                <div className="step-item">
                    <div className ="header-step">Step 4</div>
                    <div>The Tab 'Food Expenditure' figures will displayed on the right</div>
                </div>

            </div>
       <div>
       {/* <button className="button-income">Start </button> */}
       </div>
                
           
               
            </div>

        
  
    )
}

export default MainPage;
