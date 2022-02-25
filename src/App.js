import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Show from './component/Show';
import Myroutes from './component/Myroutes';
import {Link} from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>React Crud Application</h1>
      <div className='row'>
        <div className='col-md-10'></div>
        <div className='col-md-2'><Link className="btn btn-info" to="/add">Add</Link></div>
      </div>
      <div className='container'>
      </div>

      <Myroutes></Myroutes>
    </div>
  );
}

export default App;
