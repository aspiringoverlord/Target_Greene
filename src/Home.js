import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
      <div id="Home">
        <h2>Bullseye Weekly Deals</h2>
        
        <div class="list">

          <div class="home">
            <img src={require('./Images/target_01.jpg')} alt="target_01"/>
           

            <img src={require('./Images/target_02.jpg')} alt="target_02"/>
        
  
            <img src={require('./Images/target_03.jpg')} alt="target_03"/>
        
          </div>

        </div>
      </div>

      <p></p>
      <p></p>
      
      <h2> SUMMER ON SALE</h2>
      <div class="list">

<div class="home">
  <img src={require('./Images/target_04.jpg')} alt="target_01"/>
 

  <img src={require('./Images/target_05.jpg')} alt="target_02"/>


  <img src={require('./Images/target_06.jpg')} alt="target_03"/>

</div>

</div>
<p></p>
<p></p>

<h2>New Fall Trends</h2>
<div class="list">

<div class="home">
  <img src={require('./Images/target_08.jpg')} alt="target_01"/>
</div>

</div>


      </div>
    );
  }
}
 
export default Home;




/*mport React, { Component } from "react";

class Home extends Component {
    render() {
        return(
            <div>
                <h2>NEW FALL TRENDS</h2>

          <div class="home"></div>
            <img src='./src/images/target_01.jpg' alt=""/>
            </div>


        );
    }
}

export default Home;*/