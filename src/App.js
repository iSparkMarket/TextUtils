import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const [TextMode, setTextMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [BtnMode, setBtnMode] = useState('dark')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= "#01183a";
      showAlert("Dark mode has been enable", "success");
      document.title = "Convert Case Dark";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enable", "success")
      document.title = "Convert Case Light";
    }
  }

  const light = () => {
    if(mode === 'light' ){}
    else {
      setMode('light')
      setTextMode('light')
      setBtnMode('dark')
      document.body.style.backgroundColor= "White";
      showAlert("Light mode has been enable", "success");
      document.title = "Convert Case Light";
    }
  }
  const success = () => {
    if(mode === 'success' ){}
    else {
      setMode('success')
      setTextMode('dark')
      setBtnMode('success')
      document.body.style.backgroundColor= "#054005";
      showAlert("Green mode has been enable", "success");
      document.title = "Convert Case Green";
    }
  }
  const primary = () => {
    if(mode === 'primary' ){}
    else {
      setMode('primary')
      setTextMode('dark')
      setBtnMode('primary')
      document.body.style.backgroundColor= "#01183a";
      showAlert("Blue mode has been enable", "success");
      document.title = "Convert Case Blue";
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Convert Case" homeL="Home" aboutL="About" mode={mode} TextMode={TextMode} toggleMode={toggleMode} success={success} light={light} primary={primary} />
    <div className='container'>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} BtnMode={BtnMode} />

      {/* <Routes> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} BtnMode={BtnMode} />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
