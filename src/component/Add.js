import React, { Component } from 'react';

class Add extends Component {
  constructor(){
    super()
    this.state ={
        name: "",
        email: "",
        phone: "",
        error: {
          name: "",
          email: "",
          phone: "",
        }
    }
}
OnchangeHandler = (event) => {
  //var newname = event.target.value;
  var inputName = event.target.name;
  var inputvalue = event.target.value;
  this.setState({[inputName]: inputvalue})

  if(inputName === 'name'){
      var namepattern = /^([a-zA-Z]){2,30}$/;
      if(!namepattern.test(inputvalue)){
          this.setState({error: "First Name Is Not Valid"})
      }
  }else if(inputName === 'email'){
      var Emailpattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      if(!Emailpattern.test(inputvalue)){
          this.setState({email: "Email Is Not Valid"})
      }
  
  }else if(inputName === 'phone'){
      if(! Number(inputvalue)){
          this.setState({phone: "Phone Is Not Valid"})
      }
  }
};

    render() {
        return (
            <div>
                <h3>Add Data Componet</h3>
                <div className='container'>
                
                       <form>
                       <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input onChange={this.OnchangeHandler} type="text" class="form-control" id="" />
    <div id='name'></div>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Email address</label>
    <input onChange={this.OnchangeHandler} type="email" class="form-control" id="" />
    <div id='email'></div> 
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Phone</label>
    <input onChange={this.OnchangeHandler} type="number" class="form-control" id="" />
    <div id='number'></div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>          
                </div>
            </div>
        );
    }
}

export default Add;