 
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import PropTypes from "prop-types"

function App() {
  return (
    <>

    <Navbar title="textUtils" about ="About" home="Home"/>
    <div className='container'>
    <Textbox title="Enter your text"/>

   

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
