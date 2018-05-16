import React, { Component } from 'react';
import axios from "axios"



class HomePage extends Component {
	constructor(props) {
    super(props);
    this.state = {
       Name: " ",
       Product: " ",
       Quantity: " ",
    }
    this.updatename = this.updatename.bind(this)
    this.updateproduct = this.updateproduct.bind(this)
    this.updatequantity = this.updatequantity.bind(this)
    this.savenewproduct = this.savenewproduct.bind(this)
  }
updatename(e ){
	this.setState({Name: e.target.value})
}
updateproduct(e ){
	this.setState({Product: e.target.value})
}
updatequantity(e ){
	this.setState({Quantity: e.target.value})
}
savenewproduct(){
axios.post('/saveproduct', {
    name: this.state.Name,
    product: this.state.Product,
    quantity: this.state.Quantity
  })
  .then(function (response) {
    console.log('response we got back from backend',response);
  })
}

  render() {
  	console.log ( "it works", this.state)

    return (
      <div className="App">
        <h1> Home Page</h1>
        <h1> testing </h1>
        	
        	<h1>Name </h1>
        <input onChange={this.updatename}/> 
        	
        	<h1>Product </h1>
        <input onChange={this.updateproduct}/>
        
        	<h1>Quantity </h1>
        	
   <input onChange={this.updatequantity}/> 
        	
        	<button onClick={this.savenewproduct}> Submit </button>
      </div>
    );
  }
}


export default HomePage;
