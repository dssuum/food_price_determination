import React, {useState} from "react";
import {useTable} from 'react-table';
import './App.css';
import Income from './Income';
import Form from './Form.jsx';
import Card from "./CardNew.jsx";
import Tabs_new from "./Tabs_new.jsx";

function Summary(){

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
    ricePrice = (rice/100 * baseprice_rice + baseprice_rice).toFixed(2)
    return ricePrice
  }
  ricePrice = onGetPriceRice();
  let differencericePrice =  (ricePrice - baseprice_rice).toFixed(2)


  let breadPrice
  function onGetPriceBread(){
    breadPrice = (bread_cakes/100 * baseprice_bread + baseprice_bread).toFixed(2)
    return breadPrice
  }
  breadPrice = onGetPriceBread();
  let differencebreadPrice =  (breadPrice - baseprice_bread).toFixed(2)
  
  let freshMeatPrice
  function onGetPricefreshMeat(){
    freshMeatPrice = (freshmeat/100 * baseprice_fresh_meat + baseprice_fresh_meat).toFixed(2)
    return freshMeatPrice
  }
  freshMeatPrice = onGetPricefreshMeat();
  let differencefreshMeatPrice =  (freshMeatPrice - baseprice_fresh_meat).toFixed(2)

        
  let freshFishPrice
  function onGetPricefreshFish(){
    freshFishPrice = (freshfish/100 * baseprice_fresh_fish + baseprice_fresh_fish).toFixed(2)
    return freshFishPrice
  }
  freshFishPrice = onGetPricefreshFish();
  let differencefreshFishPrice =  (freshFishPrice - baseprice_fresh_fish).toFixed(2)
  

  let seafoodPrice
  function onGetPriceSeafood(){
    seafoodPrice = (seafood/100 * baseprice_seafood + baseprice_seafood).toFixed(2)
    return seafoodPrice
  }
  seafoodPrice = onGetPriceSeafood();
  let differenceseafoodPrice =  (seafoodPrice - baseprice_seafood).toFixed(2)

  
  let vegePrice
  function onGetPriceVege(){
    vegePrice = (seafood/100 * baseprice_vege + baseprice_vege).toFixed(2)
    return vegePrice
  }
  vegePrice = onGetPriceVege();
  let differencevegePrice =  (vegePrice - baseprice_vege).toFixed(2)

      
  let fruitPrice
  function onGetFruitPrice(){
    
    //fruitPrice = (fruit -baseprice_fruit).toFixed(2)
    fruitPrice = (fruit/100 * baseprice_fruit + baseprice_fruit).toFixed(2)
    return fruitPrice
  }
  fruitPrice = onGetFruitPrice();
  let differencefruitPrice =  (fruitPrice - baseprice_fruit).toFixed(2)


  let othersPrice
  function onGetPriceOthers(){
    othersPrice = (others/100 * baseprice_others + baseprice_others).toFixed(2)
    return othersPrice
  }
  othersPrice = onGetPriceOthers();
  let differenceothersPrice =  (othersPrice - baseprice_others).toFixed(2)
  


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
      
        foodExpenditure = stdB40 + (differencericePrice* coef_B40_rice) + (differencefreshMeatPrice * coef_B40_freshmeat)
        + (differencefreshFishPrice* coef_B40_freshfish) + (differenceseafoodPrice* coef_B40_seafood) 
        + (differencefruitPrice * coef_B40_fruits) + (differencevegePrice* coef_B40_vegetables) + (differencebreadPrice * coef_B40_bread_cakes) + (differenceothersPrice * coef_B40_others)
        + (income * coef_B40_income) + (ageGroupVal * coef_B40_age_group) + (genderVal* coef_B40_gender) + (marriedVal*coef_B40_married) + (ethnicVal* coef_B40_ethnic) + (localityVal* coef_B40_locality) 
        + (house * coef_B40_house) + (educationDegreeVal* coef_B40_education_degree) + (ownershipVal* coef_B40_ownership) 
        + (skillProVal* coef_B40_skill_low) + (centralDummyVal * coef_B40_centralDummy);


      }else if(incomeVal === "M40"){
        
        foodExpenditure = stdM40 + (differencericePrice* coef_M40_rice) + (differencefreshMeatPrice * coef_M40_freshmeat) 
        + (differencefreshFishPrice* coef_M40_freshfish) + (differenceseafoodPrice* coef_M40_seafood) 
        + (differencefruitPrice * coef_M40_fruits) +  (differencevegePrice* coef_M40_vegetables) + (differencebreadPrice * coef_M40_bread_cakes) + (differenceothersPrice * coef_M40_others)
        + (income * coef_M40_income) + (ageGroupVal * coef_M40_age_group) + (genderVal* coef_M40_gender) + (marriedVal*coef_M40_married)+ (ethnicVal* coef_M40_ethnic) + (localityVal* coef_M40_locality) 
        + (house * coef_M40_house)  + (educationDegreeVal* coef_M40_education_degree) + (ownershipVal* coef_M40_ownership) 
        + (skillProVal* coef_M40_skill_low) + (centralDummyVal * coef_M40_centralDummy);

      } else{
        
        foodExpenditure = stdT20+ (differencericePrice* coef_T20_rice) + (differencefreshMeatPrice * coef_T20_freshmeat)
        + (differencefreshFishPrice* coef_T20_freshfish) + (differenceseafoodPrice* coef_T20_seafood) 
        + (differencefruitPrice * coef_T20_fruits) + (differencevegePrice* coef_T20_vegetables) + + (differencebreadPrice * coef_T20_bread_cakes) + (differenceothersPrice * coef_T20_others)
        + (income * coef_T20_income) + (ageGroupVal * coef_T20_age_group) + (genderVal* coef_T20_gender) + (marriedVal*coef_T20_married)+ (ethnicVal* coef_T20_ethnic) + (localityVal* coef_T20_locality) 
        + (house * coef_T20_house) + (educationDegreeVal* coef_T20_education_degree) + (ownershipVal* coef_T20_ownership) 
        + (skillProVal* coef_T20_skill_low) + + (centralDummyVal * coef_T20_centralDummy);


      }

      return foodExpenditure.toFixed(2);


  }

 let total = calculateFoodExpenditure();
 let initialval = comparePrice();

 


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return(
        <div>
            

<table striped bordered hover size="sm">
  <thead>
    <tr >
      <th>#</th>
      <th>Food</th>
      <th>Base Price</th>
      <th>New Price</th>
      <th>Percentage Difference</th>
      <th>Difference in RM</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rice</td>
      <td>RM 28.62 </td>
      <td>RM </td>
      <td>% </td>
      <td>RM {differencericePrice} </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bread and Cakes</td>
      <td>RM 5.56</td>
      <td>RM</td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Fresh Meat</td>
      <td>RM 20.26</td>
      <td>RM</td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Fresh Fish</td>
      <td>RM 16.79</td>
      <td>RM</td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>

    <tr>
      <td>5</td>
      <td>Fresh Seafood</td>
      <td>RM 22.64</td>
      <td>RM </td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>

    <tr>
      <td>6</td>
      <td>Vegetables</td>
      <td>RM 6.21</td>
      <td>RM </td>

     
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>

    <tr>
      <td>7</td>
      <td>Fruits</td>
      <td>RM </td>
      <td>RM </td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
    </tr>

    <tr>
      <td>8</td>
      <td>Others</td>
      <td>RM 162.82</td>
      <td>RM </td>
      <td>%</td>
      <td>RM {differencericePrice} </td>
      
    </tr>
  </tbody>
</table>

<div>
    Base Total Expenditure :  RM1161.39
</div>
<div>
    Current Total Expenditure : {total}
</div>


        </div>
    )
}

export default Summary;