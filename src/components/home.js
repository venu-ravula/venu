import React from 'react';
//import { Card, Button } from 'react-bootstrap';
 import ddnHindu from '../images/ddnHindu.png';
 import ddnHans from '../images/ddnHans.png';
 import ddnIndianExpress from '../images/ddnIndianExpress.png';
// import logo from '../images/logo1.png';
import img from '../images/ddn-img.png';
import zpImg from '../images/zippr-img.png';
import zpLogo from '../images/zp-logo.svg';
import logo from '../images/ddn-logo.svg';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom' ;
import axios from 'axios';

import $ from 'jquery';
let ddnArr=[];
let ddnStr=[];

function fadeIn(element, duration = 10000) {
  element.style.display = 'block';
  element.style.opacity = 0.8;
  var last = +new Date();
  var tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if ( +element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSource:"ddn" ,
      ddnAddress:"",
      zpAddress:"",
      focused : false,
      data:"",
      individualDdnInput:"",
      ddnArray:"",
      inpuPlaceHolder:{
        ip1:"NDMC  -",
        ip2:" CNP  -",
        ip3:" E10   -",
        ip4:"543  "
      }
    }
    this.inputFieldChange=this.inputFieldChange.bind(this); 
    this.inputValues=this.inputValues.bind(this);
    this.toggleDDN=this.toggleDDN.bind(this); 
    this.toggleZP=this.toggleZP.bind(this);
    this.zpInputChange=this.zpInputChange.bind(this); 
    this.ddnInputValue=this.ddnInputValue.bind(this); 
    this.searchSubmit=this.searchSubmit.bind(this);
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
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
componentDidMount(){
  for (let x in this.refs) {
    this.refs[x].onkeypress = (e) => 
      this.inputValues(e, this.refs[x]);
      this.refs[x].onkeydown = (e) => 
      this.back(e, this.refs[x]);
  }

console.log("componentdidmount====")
  
}
componentWillMount(){
  console.log(document.activeElement  ,"**")
  
}


inputValues(e, field){
  console.log("CALLED...")
  console.log(e.target.value.length,"val-len........");
  console.log(this.state.individualDdnInput,"???individualDdnInputlen?");
  let len=this.state.individualDdnInput;
  let length=e.target.maxLength;
  let value=e.target.value;
  console.log(value.length,"value.length......");
  if(value.length==length){
    let next = this.refs[field.name].nextSibling;
      if (next && next.tagName === "INPUT") {
        console.log(field.name,"+++");
        this.refs[field.name].nextSibling.focus();
      }
  }
  // else if(len==0){
  //   let prev = this.refs[field.name].previousSibling
  //   if (prev && prev.tagName === "INPUT") {
  //     console.log(field.name,"+__++");
  //     this.refs[field.name].previousSibling.focus();
  //   }
  // }
}
back(e, field){
  let length=e.target.maxLength;
  let value=e.target.value;
  let len=this.state.individualDdnInput;
  console.log(len,value,"len in back...")
  
  if(len==0 && !value){
    let prev = this.refs[field.name].previousSibling
    if (prev && prev.tagName === "INPUT") {
      console.log(field.name,"+__++");
      this.refs[field.name].previousSibling.focus();
    }
  }
  
}
toggleDDN(e){
  this.setState({
    toggleSource:"ddn"
  })
console.log(this.state.toggleSource);
// $(document).ready(function() {
// $(".ddn-button").click(function(){
//   $(".welcome-image").fadeIn(2000);
  
// });
// });


document.getElementById('ddnbtn').addEventListener("click",function(){
    fadeIn(document.getElementById('welcome-img'), 2000);
    fadeIn(document.getElementById('sidered'), 2000);
});

} 
toggleZP(e){
  this.setState({
    toggleSource:"zp" 
  })

  document.getElementById('zpbtn').addEventListener("click",function(){
    fadeIn(document.getElementById('welcome-img'), 10000);
    fadeIn(document.getElementById('sidered'), 10000);
});

  }
  zpInputChange(e){
    e.preventDefault();
    let addr=e.target.value;
    this.setState({
      zpAddress:addr
    })
    if(addr.length==8){
      var input = document.getElementById("inputzp");
       input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
       
        }
      });

    }
    
console.log(e.target.value,"+++++")
  }

  ddnInputValue(e){
    console.log(e.target.value.length,"individualDdnInput////++")
    if(e.target.value.length==0){
      console.log("setstated....")
    this.setState({
      individualDdnInput:""
    })
  }

    
  this.setState({
individualDdnInput:e.target.value.length
  })
   let ddnObj={};
   ddnObj[e.target.name]=e.target.value;
   if(ddnObj[e.target.name].length >= 3){
    ddnArr.map((val)=>{
      if(Object.keys(val)[0]==e.target.name){
        let index = ddnArr.indexOf(val);
        if (index > -1) {
          ddnArr.splice(index, 1);
        }
      }
    })
    ddnArr.push(ddnObj);
    console.log(ddnArr,"ddnArr.......")
    this.setState({
      ddnArray:ddnArr
    })
    if(ddnArr.length==4){
      /*
    let a=[];
    ddnArr.map((ele)=>{
      a.push(ele["ip1"]);
      a.push(ele["ip2"]);
      a.push(ele["ip3"]);
      a.push(ele["ip4"]);
    }) */
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const bandA = Object.keys(a)[0].toUpperCase();
      const bandB = Object.keys(b)[0].toUpperCase();
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
    ddnArr.sort(compare);

    ddnArr.map((ele)=>{
      ddnStr.push(Object.values(ele)[0])
   })

  }
  let ddnstr1=ddnStr.slice(-4);
  let ddnstr2=ddnstr1.join('');
  this.setState({
    ddnAddress:ddnstr2
  })
  console.log(ddnstr2.length,"sorted ddnArr...");

  if(ddnstr2.length==13){
      var input = document.getElementById("ddninput");
       input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
        }
      });
  }
    console.log(ddnArr,"ddn-val....."); 
  }
  }

  searchSubmit(e){
    let zip=this.state.ddnAddress.toUpperCase();
    let zip1=this.state.ddnAddress.toUpperCase();
    let zipp;
    if(this.state.toggleSource=='ddn'){
    var chuncks = zip.split("");
    console.log(chuncks,"chuncks..")
    let zpr=chuncks.splice(4, 0, "-");
     zipp=chuncks.join("");
  }
   if(this.state.toggleSource=='zp'){
     console.log(this.state.ddnAddress.toUpperCase(),"======")
    zipp=this.state.zpAddress.toUpperCase();
  }
  console.log(zipp,"zipp++")
  window.location.replace(`https://zip.pr/IN/${zipp}`);
  
  // console.log(zipp,"zppp..")
  //   let url="https://zip.pr/tc/zippr?zippr="+zipp;
  //   console.log(url,"url.....");
  //   axios.get(url,{
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'x-zippr-api-key':'1e1352a39ebd3db612cc233e8519bee7f36ca655c43e6cf1783e58c1b31a2d7c'
  //   }
  //   })
  //     .then(res => {
  //      console.log(res,"api data");

  //      if(res.data.response.location){
  //       window.location.replace(`https://zip.pr/IN/${zipp}`)
  //      }

  //     })

    // .then(response => response.json())
    // .then(data => {
    //   console.log(data,"data in api")
    //   this.setState({ data:data })
    // });
  }


  onFocus(e){
    e.preventDefault();
    this.setState({ 
     focused:true,
     inpuPlaceHolder:{
      ip1:"     -",
      ip2:"     -",
      ip3:"      -",
      ip4:"      "
    }

    })
    console.log(this.state.individualDdnInput,"this.state.individualDdnInput");
    console.log(this.state.ddnArray.length,"this.state.ddnAddress.length");
    if(this.state.individualDdnInput==0 && this.state.ddnArray.length==0){
      document.getElementById("ddninput1").focus();
    }
    
}
onBlur() {
  this.setState({ 
    focused: false,
    inpuPlaceHolder:{
      ip1:"NDMC  -",
      ip2:"CNP  -",
      ip3:"E10   -",
      ip4:"543  "
    }
   })
}



render(){

  // if(this.state.individualDdnInput==0){

  // }

//   $(".input-box").keyup(function () {
//     console.log(this.value.length,"venuu..")
//     if (this.value.length == this.maxlength) {
//       $(this).next('.input-box').focus();
//     }
// });

console.log(this.state,"state.....")
    return(
<div className='container-fluid'>
<div className='row'>
<div className='col-md-12 main-container'>
{
  this.state.toggleSource=="ddn" ? 
  <img className='welcome-image' id="welcome-img" src= {img} alt="image1"  />
:
<img className='welcome-image' id="welcome-img" src= {zpImg} alt="image1" />
}
{/*<img className='welcome-image fade-in' src= {this.state.toggleSource=="ddn" ?  img : zpImg } alt="image1" /> 

<img className='welcome-image fade-in' src= {this.state.toggleSource=="ddn" ?  img : zpImg } alt="image1" />*/}
<img className='logo1' src= {this.state.toggleSource=="ddn" ?  logo : zpLogo }  alt="company-logo" />

<div className='col-md-12 data-fields'>
<h4 className='search-head'>What do you want to search?</h4>
<button variant="light" size="sm" class="ddn-button" id='ddnbtn' onClick={this.toggleDDN} style={{ border: this.state.toggleSource=="ddn" ? "2px solid #7bb1df" : "0px" , "background-color":this.state.toggleSource=="ddn" ? "#ffffff" : "#e5e5e5", "box-shadow":this.state.toggleSource=="ddn" ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : "","font-weight":this.state.toggleSource=="ddn" ? "700" : "400", "font-family": "source-sans-pro, sans-serif", }} > <span className='ddn-btn-text'>DIGITAL DOOR NUMBER</span></button> &nbsp;
<button variant="light" size="sm" class="zp-button" id="zpbtn" onClick={this.toggleZP} style={{ border: this.state.toggleSource=="zp" ? "2px solid #7bb1df" : "0px" , "background-color":this.state.toggleSource=="zp" ? "#ffffff" : "#e5e5e5","box-shadow":this.state.toggleSource=="zp" ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : "","font-weight":this.state.toggleSource=="zp" ? "700" : "400", "font-family": "source-sans-pro, sans-serif"}} ><span className='ddn-btn-text'>ZIPPR CODE</span></button>  <br /><br />

<div id='aaa'>

{/*}<form class="example" action="/action_page.php" style={{margin:"auto","max-width":"300px"}}>
  <span><input class='inputAndSearch' type="text" placeholder="     APGR   -   WPN   -   271   -    567"  name="search2" /> <button type="submit"><i class="fa fa-search"></i></button></span>
</form>
<br />
<span class='inputAndSearch'><input type="text" class="inputText-home" onChange={this.inputFieldChange} placeholder="     APGR   -   WPN   -   271   -    567" value={this.state.inputText}  />  <button className='search-btn'><i class="fa fa-search fa-lg" /></button>  </span><br />
*/}
<span>  

<div class="_inputText-home"    onChange={this.ddnInputValue} style={{display:this.state.toggleSource=="ddn" ? "inline-block" : "none", "box-shadow" : this.state.focused ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : ""}}>
 <input className='input-box' id='ddninput1' type='text' placeholder={this.state.inpuPlaceHolder.ip1} maxlength='4' ref='ip1' name='ip1' onFocus={this.onFocus} onBlur={this.onBlur} /> 
 <input className='input-box' type='text' placeholder={this.state.inpuPlaceHolder.ip2} maxlength='3' ref='ip2' name='ip2' onFocus={this.onFocus} onBlur={this.onBlur}/>
  <input className='input-box' type='text' placeholder={this.state.inpuPlaceHolder.ip3}  maxlength='3' ref='ip3' name='ip3' onFocus={this.onFocus} onBlur={this.onBlur}/>
  <input className='input-box' id='ddninput' type='text' placeholder={this.state.inpuPlaceHolder.ip4} maxlength='3' ref='ip4' name='ip4' onFocus={this.onFocus} onBlur={this.onBlur}/>
  </div>

  <span className='_inputText-home-zp'style={{display:this.state.toggleSource=="zp" ? "inline-block" : "none", "box-shadow" : this.state.focused ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : ""}}>
  <input className='input-box-zp' id='inputzp' type='text' placeholder='GBTP1000' maxlength='8' onChange={this.zpInputChange} onFocus={this.onFocus} onBlur={this.onBlur} />
  </span>

</span>


<button className='search-btn' id='searchbtn' onClick={this.searchSubmit} ><i class="fa fa-search fa-lg" /></button> 
<br />
{/*<span class='inputAndSearch'><input type="text" class="inputText-home" onChange={this.inputFieldChange} placeholder="     APGR   -   WPN   -   271   -    567" value={this.state.inputText}  /> <i class="fa fa-search" /></span> <br />
 <p><span>STATE</span> &nbsp; <span>LOCATION</span><span>STREET</span><span>HOUSE</span></p> */}
 {this.state.toggleSource=="ddn" ?
<span class='below-titles'><small>STATE</small> &nbsp; &nbsp;  <small>LOCATION</small> &nbsp; <small>STREET</small>  &nbsp; <small>HOUSE</small>  </span>
:
<span className='below-titles'><i class="fa fa-exclamation-circle"></i><small>ENTER A ZIPPR CODE</small></span>
}
</div>
<br />
<br />


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{"background-color": "white"}}>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active"> 
      <img class="d-block w-100" src={this.state.toggleSource=="ddn" ? require("../images/ddnIndianExpress.png") : require("../images/zpCNN.png") } alt="First slide" />
    </div>
     <div class="carousel-item">
      <img class="d-block w-100" src={this.state.toggleSource=="ddn" ? require("../images/ddnHindu.png") : require("../images/zpMunchies.png") } alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.toggleSource=="ddn" ? require("../images/ddnHans.png") : require("../images/zpQuartz.png") }  alt="Third slide" />
    </div> 

    {/* <div class="carousel-item">
      <img class="d-block w-100" src={require("../images/ddnIndianExpress.png")} alt="fourth slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="fifth slide" />
    </div>*/}
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

<div className='col-md-3 rect1' id='sidered' style={{"background-color":this.state.toggleSource=="zp" ? "#FFB933" : "#478E41"}}>

</div>

<div className='col-md-9' id="other-white">


</div>
</div>
</div>


</div>
        )
}

}
