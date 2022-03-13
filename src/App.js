
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg : message,
      type : type

    })
    setTimeout(()=>{
      setAlert(null);

    },2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");

    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
  <Navbar title='TextUtils' about='About us' mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert Alert={alert}/>
  <TextForm showAlert={showAlert} Text='Enter Here to analze' mode={mode}> </TextForm>
 {/* <About></About> */}
  </>
  );
}

export default App;
