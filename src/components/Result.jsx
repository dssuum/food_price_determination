import React, {useState} from "react";
import Form from './Form.jsx';
import Card from "./CardNew.jsx";
import Income from './Income';
import Tabs from './Tabs.jsx';
import avatar from './avatar.jpg';
import expenditure from './expenditure.png';
import MainPage from "./MainPage.jsx";





function Result(){

    const [parentCounter, setParentCounter] = useState({
        rice: 0,
        bread_cakes: 0,
        freshmeat: 0,
        freshfish:0,
        seafood:0,
        //coconut: 0,
        //tuber: 0,
        //processedfish:0,
        vegetables: 0,
        //butter: 0,
        fruits:0,
        others:0,  
        age: 23,
        age_group: "16 to 65",
        totalHousehold: "2",
        genderN: "male",
        ethnic: "malay",
        married: "notMarried",
        educationL: "spm",
        locality: "urban",
        ownership: "owned",
        skill: "professional",
        centralDummy: "center",
        income: 2000
    })
    const income = parseFloat(parentCounter.income)
    const rice = parseFloat(parentCounter.rice)
    const bread_cakes = parseFloat(parentCounter.bread_cakes)
    const freshmeat = parseFloat(parentCounter.freshmeat)
    const freshfish = parseFloat(parentCounter.freshfish)
    const seafood = parseFloat(parentCounter.seafood)
    const vege = parseFloat(parentCounter.vegetables)
    const fruit = parseFloat(parentCounter.fruits)
    const others = parseFloat(parentCounter.others)
    const age_group = parentCounter.age_group
    const house = parseFloat(parentCounter.totalHousehold)
    const gender = parentCounter.genderN
    const ethnic = parentCounter.ethnic
    const married = parentCounter.married
    const educationL = parentCounter.educationL
    const locality = parentCounter.locality
    const ownership = parentCounter.ownership
    const skill = parentCounter.skill
    const centralDummy = parentCounter.centralDummy

  var coef_B40_rice = -38.15;
  var coef_B40_bread_cakes = -49.07;
  var coef_B40_freshmeat = -8.26;
  var coef_B40_freshfish = -11.64;
  var coef_B40_seafood = 11.85;
  var coef_B40_vegetables = 104.26;
  var coef_B40_fruits = -17.84;
  var coef_B40_others = -15.13;

  var coef_M40_rice = -104.14;
  var coef_M40_bread_cakes = -11.72;
  var coef_M40_freshmeat = 1.22;
  var coef_M40_freshfish = 4.88;
  var coef_M40_seafood = 1.28;
  var coef_M40_vegetables = 126.18;
  var coef_M40_fruits = 38.19;
  var coef_M40_others = -31.48;

  var coef_T20_rice = -137.86;

  var coef_T20_bread_cakes = -23.28;
  var coef_T20_freshmeat = 2.08;
  var coef_T20_freshfish = 8.09;
  var coef_T20_seafood = -8.92;
  var coef_T20_vegetables = 166.45;
  var coef_T20_fruits = 96.84;
  var coef_T20_others = -60.71;


  var coef_B40_income = 0.1103;
  var coef_B40_age_group = 23.64;
  var coef_B40_gender = -14.60;
  var coef_B40_married = 131.70;
  var coef_B40_ethnic = -7.96;
  var coef_B40_locality = 9.59;
  var coef_B40_house =107.18;
  var coef_B40_education_degree =28.55;
  var coef_B40_ownership = 28.74;
  var coef_B40_skill_low= 20.52;
  var coef_B40_centralDummy = 18.38;
  var stdB40 = 668.64;

  var coef_M40_income = 0.0390;
  var coef_M40_age_group = -28.98;
  var coef_M40_gender = -20.30;
  var coef_M40_house =138.99;
  var coef_M40_married = 54.2683;
  var coef_M40_ethnic = -16.77;
  var coef_M40_locality = 48.56;
  var coef_M40_education_degree =18.9469;
  var coef_M40_ownership = 36.76;
  var coef_M40_skill_low= -1.64;
  var coef_M40_centralDummy = -42.45;
  var stdM40 = 631.13;


  var coef_T20_income = 0.0129;
  var coef_T20_age_group = -121.39;
  var coef_T20_gender = -29.79;
  var coef_T20_married = 31.5471;
  var coef_T20_ethnic = -52.34;
  var coef_T20_locality = 79.31;
  var coef_T20_house =193.70;
  var coef_T20_education_degree =33.0565;
  var coef_T20_ownership = 80.73;
  var coef_T20_skill_low= 0.49;
  var coef_T20_centralDummy =-38.28 ;
  var stdT20 = 1375.65;

  var baseprice_rice = 28.61;
  var baseprice_bread = 5.56;
  var baseprice_fresh_meat = 20.26;
  var baseprice_seafood = 22.64;
  var baseprice_fresh_fish = 16.79;
  var baseprice_fruit = 6.20;
  var baseprice_others= 162.82;
  var baseprice_vege=6.21;

  
      let incomeVal
      function onChangeIncome(){
          if (income <2848 ){
              incomeVal="B40"
          }
          else if (income>2848  && income<6503){
              incomeVal="M40"
              
          }else {incomeVal="T20"}

          return incomeVal   
      }
      incomeVal = onChangeIncome();

      let ricePrice
      function onGetPriceRice(){
        ricePrice = rice/100 * baseprice_rice + baseprice_rice
        return ricePrice
      }
      ricePrice = onGetPriceRice();
      

      let breadPrice
      function onGetPriceBread(){
        breadPrice = (bread_cakes/100 * baseprice_bread + baseprice_bread).toFixed(2)
        return breadPrice
      }
      breadPrice = onGetPriceBread();

      
      let freshMeatPrice
      function onGetPricefreshMeat(){
        freshMeatPrice = (freshmeat/100 * baseprice_fresh_meat + baseprice_fresh_meat).toFixed(2)
        return freshMeatPrice
      }
      freshMeatPrice = onGetPricefreshMeat();

            
      let freshFishPrice
      function onGetPricefreshFish(){
        freshFishPrice = (freshfish/100 * baseprice_fresh_fish + baseprice_fresh_fish).toFixed(2)
        return freshFishPrice
      }
      freshFishPrice = onGetPricefreshFish();
      

      let seafoodPrice
      function onGetPriceSeafood(){
        seafoodPrice = (seafood/100 * baseprice_seafood + baseprice_seafood).toFixed(2)
        return seafoodPrice
      }
      seafoodPrice = onGetPriceSeafood();

      
      let vegePrice
      function onGetPriceVege(){
        vegePrice = (seafood/100 * baseprice_vege + baseprice_vege).toFixed(2)
        return vegePrice
      }
      vegePrice = onGetPriceVege();

      let othersPrice
      function onGetPriceOthers(){
        othersPrice = (others/100 * baseprice_others + baseprice_others).toFixed(2)
        return othersPrice
      }
      othersPrice = onGetPriceOthers();
      

    
      function comparePrice(){
       const  initialval = total;


        return initialval;

      }


      let ageGroupVal, genderVal, foodExpenditure , ethnicVal, marriedVal, localityVal, educationSPMVal, educationDiplomaVal, educationDegreeVal, employmentpublicVal, employmentprivateVal, employmentselfVal,
      residentialBangloVal, residentialSemiDVal, residentialFlatVal, residentialTerraceVal, ownershipVal, skillProVal, skillWorkVal, skillSalesVal, centralDummyVal;
      function calculateFoodExpenditure (){
        //check for age group
        if (age_group === "16 to 65"){
          ageGroupVal = 1
          console.log(ageGroupVal)
        } else {ageGroupVal = 0}

        //check for gender 
        if (gender === "male"){
            genderVal = 1
            console.log(genderVal)
        } else {genderVal = 0}

        //Check for married
        if (married === "isMarried"){
            marriedVal=1
        } else { marriedVal=0 }

        //Check for locality
        if (locality === "urban")
        {localityVal = 1}
        else {
         localityVal = 0}

         //Check for ethnic
         if(ethnic ==="malay"){
             ethnicVal =1
         } else {ethnicVal = 0}


        if(educationL==="spm"){
            educationSPMVal=1;
            educationDiplomaVal=0;
            educationDegreeVal=0;} 
          else if(educationL==="diploma"){
            educationSPMVal=0;
            educationDiplomaVal=1;
            educationDegreeVal=0; }
          else if(educationL==="degree"){
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=1; }
          else{
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=0;
          }


            if (ownership === "owned") {
                ownershipVal=1
            }else {ownershipVal =0}

            if (skill === "low skill"){
                skillProVal = 1;
            } else {
                skillProVal = 0;
            } 

            if (centralDummy === "center"){
              centralDummyVal = 1;
          } else {
            centralDummyVal = 0;
          } 


          genderVal = parseInt(genderVal);
          ageGroupVal = parseInt(ageGroupVal);
          marriedVal = parseInt(marriedVal);
          localityVal = parseInt(localityVal);
          educationSPMVal = parseInt(educationSPMVal);
          educationDegreeVal = parseInt(educationDegreeVal);
          educationDiplomaVal = parseInt(educationDiplomaVal);
          ownershipVal = parseInt(ownershipVal);
          skillProVal = parseInt(skillProVal);



        if (incomeVal === "B40") {
      
          foodExpenditure = stdB40 + (rice* coef_B40_rice) + (freshmeat * coef_B40_freshmeat)
          + (freshfish* coef_B40_freshfish) + (seafood* coef_B40_seafood) 
          + (fruit * coef_B40_fruits) + (vege* coef_B40_vegetables) + (bread_cakes * coef_B40_bread_cakes) + (others * coef_B40_others)
          + (income * coef_B40_income) + (ageGroupVal * coef_B40_age_group) + (genderVal* coef_B40_gender) + (marriedVal*coef_B40_married) + (ethnicVal* coef_B40_ethnic) + (localityVal* coef_B40_locality) 
          + (house * coef_B40_house) + (educationDegreeVal* coef_B40_education_degree) + (ownershipVal* coef_B40_ownership) 
          + (skillProVal* coef_B40_skill_low) + (centralDummyVal * coef_B40_centralDummy);
  
  
        }else if(incomeVal === "M40"){
          
          foodExpenditure = stdM40 + (rice* coef_M40_rice) + (freshmeat * coef_M40_freshmeat) 
          + (freshfish* coef_M40_freshfish) + (seafood* coef_M40_seafood) 
          + (fruit * coef_M40_fruits) +  (vege* coef_M40_vegetables) + (bread_cakes * coef_M40_bread_cakes) + (others * coef_M40_others)
          + (income * coef_M40_income) + (ageGroupVal * coef_M40_age_group) + (genderVal* coef_M40_gender) + (marriedVal*coef_M40_married)+ (ethnicVal* coef_M40_ethnic) + (localityVal* coef_M40_locality) 
          + (house * coef_M40_house)  + (educationDegreeVal* coef_M40_education_degree) + (ownershipVal* coef_M40_ownership) 
          + (skillProVal* coef_M40_skill_low) + (centralDummyVal * coef_M40_centralDummy);
  
        } else{
          
          foodExpenditure = stdT20+ (rice* coef_T20_rice) + (freshmeat * coef_T20_freshmeat)
          + (freshfish* coef_T20_freshfish) + (seafood* coef_T20_seafood) 
          + (fruit * coef_T20_fruits) + (vege* coef_T20_vegetables) + + (bread_cakes * coef_T20_bread_cakes) + (others * coef_T20_others)
          + (income * coef_T20_income) + (ageGroupVal * coef_T20_age_group) + (genderVal* coef_T20_gender) + (marriedVal*coef_T20_married)+ (ethnicVal* coef_T20_ethnic) + (localityVal* coef_T20_locality) 
          + (house * coef_T20_house) + (educationDegreeVal* coef_T20_education_degree) + (ownershipVal* coef_T20_ownership) 
          + (skillProVal* coef_T20_skill_low) + + (centralDummyVal * coef_T20_centralDummy);
  
  
        }
  
        return foodExpenditure.toFixed(2);


      }

     let total = calculateFoodExpenditure();
     let initialval = comparePrice();

     
     

return(

<div  className="content-sc">

    <div className="grid-box">
        <div>
        <Tabs>
        <div label = "Main Page">

          <MainPage/>
        </div>

        <div label="Income Group">
        <Income setParentCounter = {setParentCounter} />
        </div>
        <div label="Demography">
        <div className="scroll">
            <div className="food-policy-container">
            <Form  setParentCounter = {setParentCounter}/>
          {/*   <button className="button-demography">Previous</button>
            <button className="button-demography">Next</button> */}
            </div>
        </div>
     
        </div>
        <div label="Food Determination">
        <div className="scroll">
        <div className="food-policy-container">
        <Card  setParentCounter = {setParentCounter}/>
        {/* <button className="button-demography">Previous</button> */}
        </div>
     
        
        </div>
        

        </div>
   
   </Tabs>
        
        
        </div>
        <div className="calculate">
        <div className="total-expenditure-top"></div>

        <div className="income-group-grid">
        <div className="income-group-grid-item">
        <img className="img-expenditure" src={expenditure} alt={"empty"}/>
          </div>
            <div className="income-group-grid-item income-group">
                    <div className="income-level-group">{incomeVal}</div>
                    <div>Income: RM {parentCounter.income}</div>
                    
            </div>

        </div>
         

            <div className="total-expenditure">

            <div className="title-food-expenditure"> Total Food Expenditure: </div> 
            <div className="total-food-expenditure"> RM: {total} </div>
              <div className="summary-food">
                <div> Rice: RM {ricePrice} </div> 
                <div> Bread and Cakes: RM {breadPrice} </div> 
                <div> Fresh Meat: RM {freshMeatPrice} </div> 
                <div> Fresh Fish: RM {freshFishPrice} </div> 
                <div> Fresh Seafood: RM {seafoodPrice} </div> 
                <div> Vegetables: RM {vegePrice} </div> 
                <div> Others: RM {othersPrice} </div> 
              
              </div>
      
            </div>

            {/* <div className = "profile">
              <div> Total Household: {house} </div>
              <div> Age Group: {age_group} </div>
              <div> Gender: {gender} </div>
              <div> Ethnic: {ethnic} </div>
              <div> Marital Status: {married} </div>
              <div> Education Level: {educationL} </div>
              <div> Locality :  {locality} </div>
              <div> House Ownership: {ownership} </div>
            </div> */}
      

        {/* <div><button>Set as Initial Value</button></div>
        <div> Inital Value: {initialval}</div> */}
        </div>

    </div>



</div>

)

}

export default Result;
