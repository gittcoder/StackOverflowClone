import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
const BRoutes=()=>
{
    return(
        <div>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/Auth" component={Auth}/>
            </Routes>
        </div>)
}

export default BRoutes;