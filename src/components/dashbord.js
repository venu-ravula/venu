import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        agencyName:["AnanthTechnologys","Mark","Clb"],
        _agencyName:["AnanthTechnologys","Mark","Clb"],
        ulbName:["AnanthTechnologys","Mark","CLB"],
        _ulbName:["AnanthTechnologys","Mark","CLB"],
  };

  this.agencyNameChange=this.agencyNameChange.bind(this);
  this.ulbinputChange=this.ulbinputChange.bind(this);

  }

agencyNameChange(e){
  let changedval=e.target.value.toString();
  console.log(changedval);
  let actual=this.state._agencyName;
  let searched=[];
  actual.map((data)=>{
    //var n = data.indexOf(changedval);
    var re = new RegExp(changedval, 'gi');
    let n = data.match(re);
    console.log(n,"nnnn")
    if(n){
      searched.push(data)
    }
  })
this.setState({
agencyName:searched
})
if(!changedval){
  this.setState({
  agencyName:["AnanthTechnologys","Mark","Clb"]
  })
}
}

ulbinputChange(e){
  let changedval=e.target.value.toString();
  console.log(changedval,"changedval...")
  let actual=this.state._ulbName;
  let searched=[];
  actual.map((data)=>{
    console.log(changedval,"changedval...")
    var re = new RegExp(changedval, 'gi');
    let n = data.match(re);
    console.log(n,"nnnn")
    if(n){
      searched.push(data)
    }
  })
  this.setState({
    ulbName:searched
    })
    if(!changedval){
      this.setState({
      ulbName:["AnanthTechnologys","Mark","Clb"]
      })
    }

}

  render() {
    console.log(this.state.ulbName,"ulbName");
    return (
    <div className='container-fluid'>
<div className='row'>
<div className='col-md-6'>
<Card>
  <Card.Header >
  <div class='agentSummery'>AGENT SUMMARY</div>
  </Card.Header>
  <div class="input-group mb-4" style={{'width': '7em'}}>
    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Today</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <Card.Body id='agentcardBody' >
  <table class="table table-striped table-light table-responsive  fixed-table-body">
<thead>
  <tr>

    <th scope="col">
    <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <b>Agency Name</b>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
<input onChange={this.agencyNameChange} style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Today</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Total</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>% Attendance</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

  </tr>
</thead>
<tbody>
{this.state.agencyName.map((name)=>

  <tr>
    <td>{name}</td>
    <td>6</td>
    <td>367</td>
    <td>1.7%</td>
  </tr>

)}
{/*
  <tr>
    <td>AnanthTechnologys</td>
    <td>6</td>
    <td>367</td>
    <td>1.7%</td>
  </tr>
  <tr>

  <td>Mark</td>
  <td>66</td>
  <td>998</td>
  <td>0.5%</td>
  </tr>
  <tr>

  <td>CLB</td>
  <td>9</td>
  <td>67</td>
  <td>0.2%</td>
  </tr>
  */}
</tbody>
</table>
  </Card.Body>
</Card>
</div>



<div className='col-md-6'>
<Card>
  <Card.Header >
<div class='agentSummery'>ULB REPORT</div>
</Card.Header>
<div className='row ulbrow'>

<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>All Agencies</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>All Districts</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div><div class="input-group mb-3" >
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Today</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

</div>

  <Card.Body style={{padding: '0px'}}>

  <table class="table table-striped table-light table-responsive  fixed-table-body">
  <thead>
  <tr>

    <th scope="col">
    <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <b>ULB</b>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
  </div>
  <input style={{width: '100%'}} type='text' onChange={this.ulbinputChange} />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Parcels</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Buildings</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Portions</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>

    <th scope="col">
    <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <b>Agents</b>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
    </div>
    </div>
    <input style={{width: '100%'}} type='text' />
    </th>
  </tr>
  </thead>
  <tbody>

  {this.state.ulbName.map((name)=>

<tr>
  <td>{name}</td>
  <td>12</td>
  <td>369</td>
  <td>3%</td>
  <td>9</td>
</tr>

)}
{/*
  <tr>
    <td>AnanthTechnologys</td>
    <td>6</td>
    <td>367</td>
    <td>1.7%</td>
    <td>17</td>
  </tr>
  <tr>

  <td>Mark</td>
  <td>66</td>
  <td>998</td>
  <td>0.5%</td>
  <td>17</td>

  </tr>
  <tr>

  <td>CLB</td>
  <td>9</td>
  <td>67</td>
  <td>0.2%</td>
  <td>17</td>

  </tr>
*/}
  </tbody>
  </table>

  </Card.Body>
</Card>
</div>
 </div>
    </div>
    );
  }
}
