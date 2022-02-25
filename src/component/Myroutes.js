import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import Add from './Add';
import Edit from './Edit';
import Show from './Show';


class Myroutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<Show></Show>}>Show</Route>
                    <Route exact path='/add' element={<Add></Add>}>Add</Route>
                    <Route exact path='/edit' element={<Edit></Edit>}>Edit</Route>
                </Routes>
            </div>
        );
    }
}

export default Myroutes;