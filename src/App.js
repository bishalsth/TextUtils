
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
  <Navbar title='TextUtils' about='About us'></Navbar>
  <TextForm Text='Enter Here to analze'> </TextForm>
 {/* <About></About> */}
  </>
  );
}

export default App;
