import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './components/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './components/Questions/DisplayQuestion';
const BRoutes=()=>
{
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Auth" element={<Auth/>}/>
                <Route exact path="/Questions" element={<Questions/>}/>
                <Route exact path="/AskQuestion" element={<AskQuestion/>}/>
                <Route exact path="/DisplayQuestion/:id" element={<DisplayQuestion/>}/>
            </Routes>
        </div>)
}

export default BRoutes;