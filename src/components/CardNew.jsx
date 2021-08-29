import React, {useState} from "react";
import avatar from './avatar.jpg';
import rice_sack from './rice_sack.jpg';
import bread from './bread.jpg';
import meat from './meat-4.png';
import fresh_fish from './fresh-fish.png';
import seafood from './seafood.png';
import vege from './vege.png';
import fruit from './fruit.png';
import shopper from './shopper.png';


function Card ({ setParentCounter },props){

    const [rangeval, setRangeVal] = useState({
        rice: 0,
        bread_cakes: 0,
        freshmeat: 0,

        freshfish:0,
        seafood:0,

        vegetables: 0,
      
        others: 0,
        fruits:0,
        price_rice:0,
        price_bread:0,
        price_freshfish:0,
        price_freshmeat:0,
        price_seafood:0,
        price_vegetable:0,
        price_fruits:0,
        price_others: 0
      
    })
    


    function handleChange(event){
        const {name, value} = event.target;
        setRangeVal(prevrangeval => {
          return {
            ...prevrangeval,
            [name]:value
          };
        });

        setParentCounter(prevrangeval => {
            return {
              ...prevrangeval,
              [name]:value
            };
          });
    
      }

     


    return (

     

        <div>
          <div className="step-guide">   <h1>Step 3: Determine Price</h1></div>
       
        <div className="grid-style-2">

  
        <div className="card-2">
          <div className="item1">
          <label className="header-card-1"> Rice - 10KG </label><br></br>  
          </div>
          <div className="item2">
         
          <img className="img" src={rice_sack} alt={"empty"}/>
          </div>
          <div className="item3">
        <label> Base Price: 28.61 </label><br></br>
          {/* <label> Average Price: RM 28.61 </label><br></br> */}
          <label> New Price: RM {(rangeval.rice/100*28.61 +28.61).toFixed(2)} </label><br></br>
          
            <div className = "box">
            <div class="value right">-20</div>
            <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
            <input type= "range" min= {-20} max={30} name="rice" value={rangeval.rice} className="slider"onChange= {handleChange}/></div>
            <div class="value right">30</div>
            </div>
            <div className="diff-card">
              <label> Difference Percentage: {rangeval.rice} % </label>
            </div>
            </div>
        </div>


        <div className="card-2">
          <div className="item1">  <label className="header-card-1"> Bread and Cakes - per bun or per/slice  </label><br></br> </div>
          
          <div className="item2"><img className="img" src={bread} alt={"empty"}/></div>
      
      <div className="item3">
      <label> Base Price: 5.56 </label><br></br>
        <label> New Price: RM {(rangeval.price_bread/100*5.56 +5.56).toFixed(2)} </label><br></br>  
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="bread_cakes" value={rangeval.bread_cakes} className="slider"onChange= {handleChange}/>  </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.bread_cakes} % </label>
            </div>

      </div>

        </div>


        <div className="card-2">
          <div className="item1"><label className="header-card-1">Fresh Meat - 1KG: </label> <br></br></div>

          <div className="item2">  <img className="img" src={meat} alt={"empty"}/></div>

        <div className="item3">
        <label>Base Price: RM20.26 </label> <br></br>
        <label> New Price: {(rangeval.freshmeat/100*20.26 + 20.26).toFixed(2)} </label><br></br>  
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshmeat" value={rangeval.freshmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.freshmeat} % </label>
            </div>
          
        </div>
       
        </div>


        <div className="card-2">
          <div className="item1"><label className="header-card-1">Fresh Fish - 1KG</label> <br></br>  </div>
          
          <div className="item2"> <img className="img" src={fresh_fish} alt={"empty"}/></div>
        
        <div className="item3">
        <label>Base Price: RM16.79 </label> <br></br>  
        <label>New Price: {(rangeval.freshfish/100*16.79 + 16.79).toFixed(2)} </label><br></br> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshfish" value={rangeval.freshfish} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.freshfish} % </label>
            </div>
        </div>
       
        </div>

        <div className="card-2">
          <div className="item1"> <label className="header-card-1">Fresh Seafood - 1KG</label><br></br>  </div>
          <div className="item2"> <img className="img" src={seafood} alt={"empty"}/></div>
       
       <div className="item3">
       <label>Base Price: RM22.64</label><br></br>  
        <label>New Price RM: {(rangeval.seafood/100*22.64 + 22.64).toFixed(2)} </label><br></br> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="seafood" value={rangeval.seafood} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.seafood} % </label>
            </div>

       </div>
   
        </div>

        <div className="card-2">
          <div className="item1">          
        <label className="header-card-1">Vegetables - 1KG</label><br></br></div>

        <div className="item2"> <img className="img" src={vege} alt={"empty"}/></div>

        <div className="item3">
        <label>Base Price: RM6.21</label><br></br> 
        <label>New Price RM: {(rangeval.vegetables/100*6.21 + 6.21).toFixed(2)} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="vegetables" value={rangeval.vegetables} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.vegetables} % </label>
            </div>

        </div>
    
        </div>



        <div className="card-2">
          <div className="item1"> <label className="header-card-1">Fruits - 1KG</label><br></br>  </div>
       
        <div className="item2"> <img className="img" src={fruit} alt={"empty"}/></div> 

        <div className="item3">
        <label>Base Price: RM6.20</label><br></br>   
        <label>New Price: RM {(rangeval.fruits/100 * 6.2 +6.2).toFixed(2)} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="fruits" value={rangeval.fruits} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.fruits} % </label>
            </div>

        </div>
      
        </div>

        <div className="card-2">
          <div className="item1">    <label className="header-card-1">Others:</label> <br></br></div>
    
        <div className="item2"> <img className="img" src={shopper} alt={"empty"}/></div>

        <div className="item3">
        <label>Base Price: RM 162.82</label> <br></br>
        <label> New Price: {(rangeval.others/100*162.82 + 162.82).toFixed(2)} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="others" value={rangeval.others} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.others} % </label>
            </div>
        </div>

        </div>
 
            
        </div>
            
         

        
        </div>


    )

}

export default Card;