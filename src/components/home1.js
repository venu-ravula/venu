import React from 'react';
//import { Card, Button } from 'react-bootstrap';
import img from '../images/welcomeImage.png';
import logo from '../images/logo1.png';
import { Button } from 'react-bootstrap';

export default class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText:""
    }
    this.inputFieldChange=this.inputFieldChange.bind(this);
}

inputFieldChange(e){
  let value=e.target.value;
console.log(e.target.value);
var foo = value.split("-").join(""); // remove hyphens
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  console.log(foo);

  this.setState({
    inputText:foo
  })
}





render(){

    return(
<div className='container-fluid'>
<div className='row'>
<div className='col-md-12'>
<img className='welcome-image' src={img} alt="image1" />
<img  src={logo} alt="company-logo" />

<div className='col-md-12 data-fields'>
<h4 >What do you want to search?</h4>
<button variant="light" size="sm" >DIGITAL DOOR NUMBER</button> &nbsp;
<button variant="light" size="sm"  >Zippr Code</button>  <br /><br />

<div >

{/*}<form class="example" action="/action_page.php" style={{margin:"auto","max-width":"300px"}}>
  <span><input class='inputAndSearch' type="text" placeholder="     APGR   -   WPN   -   271   -    567"  name="search2" /> <button type="submit"><i class="fa fa-search"></i></button></span>
</form>*/}

<span ><input type="text"  onChange={this.inputFieldChange} placeholder="     APGR   -   WPN   -   271   -    567" value={this.state.inputText}  />  <button className='search-btn'><i class="fa fa-search fa-lg" /></button>  </span><br />
{/*<span class='inputAndSearch'><input type="text" class="inputText-home" onChange={this.inputFieldChange} placeholder="     APGR   -   WPN   -   271   -    567" value={this.state.inputText}  /> <i class="fa fa-search" /></span> <br />
 <p><span>STATE</span> &nbsp; <span>LOCATION</span><span>STREET</span><span>HOUSE</span></p> */}
<span ><small>STATE</small> &nbsp; &nbsp;  <small>LOCATION</small> &nbsp; <small>STREET</small>  &nbsp; <small>HOUSE</small>  </span>
</div>
<br />
<br />


<div  class="carousel slide" data-ride="carousel" style={{"background-color": "#d6d5d2"}}>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



</div>

<div className='col-md-3 rect1'>

</div>

<div className='col-md-9'>


</div>
</div>
</div>


</div>
        )
}

}
