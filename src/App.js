
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
  <Navbar title='TextUtils' about='About us' mode={mode} toggleMode={toggleMode}></Navbar>
  <TextForm Text='Enter Here to analze' mode={mode}> </TextForm>
 {/* <About></About> */}
  </>
  );
}

export default App;
