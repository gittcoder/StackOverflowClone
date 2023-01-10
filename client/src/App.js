import {useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'  
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './BRoutes';
import {useDispatch} from 'react-redux'
import {fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users';



const App=()=> {
  const dispatch = useDispatch(); 
  useEffect(()=>
{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers)
},[dispatch])
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes/>
    </div>
    </Router>
  );
}

export default App;
