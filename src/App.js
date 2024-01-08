// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
import { useState} from 'react';
//  import About from './components/About';
import Alert  from './components/Alert';

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
    }
    else{
      setMode('light')
      document.body.style.background = 'white'
    }
  }
  return (
<>

{/* <Navbar title="TEXTUTILS" AboutText="AboutTextUTILS"/>  */}
<Navbar title="TEXTUTILS" mode={mode} tooggleMode={toggleMode}/>
 <Alert/> 
<div className='container my-3'>
   <TextForm heading="Enter the text to analyse" mode={mode}/>   

</div>

</>

  );
}

export default App;
