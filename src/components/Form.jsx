import React, {useState} from "react";
import './App.css';


function Form({ setParentCounter }, props) {

const [demography, setDemography] = useState({

  age: 23,
  age_group: "16 to 65",
  totalHousehold: 1,
  genderN: "male",
  ethnic: "malay",
  married: "notMarried",
  educationL: "spm",
  locality: "urban",
  ownership: "owned",
  centralDummy: "center",
  skill: "low skill"
});


function handleChangeInputText(event){
  const {name, value} = event.target;
  setDemography(prevDemography => {
    return {
      ...prevDemography,
      [name]:value
    };

  });

  setParentCounter(prevDemography => {
    return {
      ...prevDemography,
      [name]:value
    };

  });


}




  return (
 <div>
   <h1 className="step-guide">Step 2: Demography Profiles </h1>
   <div>

   </div>
    <div className = "container-demography">


      <div className="title-for-card">  </div>

      <div className= "card-demogrphy">

   {/*    <div className="card">
      <label>Age:</label><br></br>
      <input type="text" onChange= {handleChangeInputText} name="age" value={demography.age}/>
      </div> */}

      <div className= "card">
      <label>Total Household :</label><br></br>
      <input type="text"  onChange= {handleChangeInputText} name="totalHousehold" value={demography.totalHousehold} />
      </div>

      <div className="card card-radiobtn-2">
      <label>Gender :</label><br></br>
      <input onChange= {handleChangeInputText} type="radio" id="male" name="genderN" value="male" checked={demography.genderN === "male"}/>
      <label>Male</label><br></br>
      <input type="radio" id="female" name="genderN" value="female" onChange= {handleChangeInputText} checked={demography.genderN === "female"}/>
      <label >Female</label>
      </div>
      

      <div className="card card-radiobtn-3">
      <label>Age Group :</label><br></br>
      <input type="radio" id="16to65" name="age_group" value="16 to 65" onChange= {handleChangeInputText} checked={demography.age_group === "16 to 65"}/>
      <label>16 to 65</label><br></br>
      <input type="radio" id=">65" name="age_group" value="more than 65" onChange= {handleChangeInputText} checked={demography.age_group ==="more than 65"}/>
      <label>more than 65</label><br></br>
 

      </div>


      <div className="card card-radiobtn-3">
      <label>Ethnic :</label><br></br>
      <input type="radio" id="malay" name="ethnic" value="malay" onChange= {handleChangeInputText} checked={demography.ethnic==="malay"}/>
      <label>Malay</label><br></br>
      <input type="radio" id="chinese" name="ethnic" value="chinese" onChange= {handleChangeInputText} checked={demography.ethnic==="chinese"}/>
      <label>Chinese</label><br></br>
      <input type="radio" id="indian" name="ethnic" value="indian" onChange= {handleChangeInputText} checked={demography.ethnic==="indian"}/>
      <label>Indian</label><br></br>
      <input type="radio" id="others" name="ethnic" value="others" onChange= {handleChangeInputText} checked={demography.ethnic==="others"}/>
      <label>Others</label><br></br>
      </div>

      <div className="card card-radiobtn-2">
      <label>Marital Status :</label><br></br>
      <input type="radio" id="isMarried" onChange= {handleChangeInputText} name="married" value="isMarried" checked= {demography.married === "isMarried"}/>
      <label>Yes</label><br></br>
      <input type="radio" id="notMarried" onChange= {handleChangeInputText} name="married" value="notMarried" checked= {demography.married === "notMarried"}/>
      <label>No</label><br></br>
      </div>



      <div className="card card-radiobtn-3">
      <label>Education Level : </label><br></br>
      <input type="radio" id="spm" name="educationL" value="spm" onChange= {handleChangeInputText} checked= {demography.educationL === "spm"}/>
      <label>less than SPM</label><br></br>
      {/* <input type="radio" id="diploma" name="educationL" value="diploma" onChange= {handleChangeInputText} checked= {demography.educationL === "diploma"} />
      <label>Diploma </label><br></br> */}
      <input type="radio" id="degree" name="educationL" value="degree" onChange= {handleChangeInputText} checked= {demography.educationL === "degree"}/>
      <label>higher than Degree</label><br></br>
      {/* <input type="radio" id="other" name="educationL" value="other" onChange= {handleChangeInputText} checked= {demography.educationL === "other"}/>
      <label>Others</label><br></br> */}
      </div>


      <div className="card card-radiobtn-2">
      <label>Location :</label><br></br>
      <input type="radio" id="urban" name="locality" value="urban" onChange= {handleChangeInputText} checked= {demography.locality === "urban"}/>
      <label>Urban</label><br></br>
      <input type="radio" id="rural" name="locality" value="rural" onChange= {handleChangeInputText} checked= {demography.locality === "rural"}/>
      <label>Rural </label><br></br>
      </div>


      <div className="card card-radiobtn-2">
      <label htmlFor="ownership">Ownership :</label><br></br>
      <input type="radio" id="owned" name="ownership" value="owned" onChange= {handleChangeInputText} checked= {demography.ownership === "owned"} />
      <label htmlFor="urban">Owned</label><br></br>
      <input type="radio" id="rent" name="ownership" value="rent" onChange= {handleChangeInputText} checked= {demography.ownership === "rent"} />
      <label htmlFor="rural">Rent </label><br></br>
      </div>

      <div className="card card-radiobtn-3">
      <label htmlFor="skill">Occupation :</label><br></br>
      <input type="radio" id="professional" name="skill" value="professional" onChange= {handleChangeInputText} checked= {demography.skill === "professional"}/>
      <label htmlFor="Banglo">Professional</label><br></br>
      <input type="radio" id="low_skill" name="skill" value="low skill" onChange= {handleChangeInputText} checked= {demography.skill === "low skill"}/>
      <label htmlFor="low_skill">Low Skill </label><br></br>
      </div>

      <div className="card card-radiobtn-2">
      <label>Region :</label><br></br>
      <input onChange= {handleChangeInputText} type="radio" id="center" name="centralDummy" value="center" checked={demography.centralDummy === "center"}/>
      <label>Center</label><br></br>
      <input type="radio" id="other" name="centralDummy" value="other" onChange= {handleChangeInputText} checked={demography.centralDummy === "other"}/>
      <label >Other</label>
      </div>

      
      
      </div>

    </div>

 
 </div>

  )

}

export default Form;
