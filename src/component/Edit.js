import React, { Component } from 'react';

class Edit extends Component {
    render() {
        return (
            <div>
                <h3>Edit Data Componet</h3>
                <div className='container'>
                
                <form>
                <div class="mb-3">
<label for="" class="form-label">Name</label>
<input type="text" class="form-control" id="" />
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
</div>
<div class="mb-3">
<label for="" class="form-label">Phone</label>
<input type="number" class="form-control" id="" />
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>          
         </div>
            </div>
        );
    }
}

export default Edit;