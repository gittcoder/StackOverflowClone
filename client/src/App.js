import {useEffect} from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar'  
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './BRoutes';
import {useDispatch} from 'react-redux'
import {fetchAllQuestions} from './actions/question'



const App=()=> {
  const dispatch = useDispatch(); 
  useEffect(()=>
{
    dispatch(fetchAllQuestions())
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
