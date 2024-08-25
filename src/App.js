import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import PropTypes from "prop-types"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <>

    <Navbar title="textUtils" about ="About" home="Home"/>
    <div className='container'>
   
    
    <Router>
 
        <Routes>
               <Route path="/home" element={ <Textbox title="Enter your text"/>}/>
             <Route path="/about" element={<About/>}/> 
        </Routes>
  
    </Router>
     

    </div>

     
    </>
   
    
  );
}

Textbox.propTypes={
  title: PropTypes.string
};

Navbar.propTypes={
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string
};

export default App;
