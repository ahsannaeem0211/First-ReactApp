
import { useState } from 'react';
import './App.css';
// import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = 'React App - Dark Mode';
      // setInterval(() => {
      //   document.title = 'React App - Amazing Mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install React App';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'React App - Light Mode';
    }

  }

  return (
    <>
      {/* <Router> */}
        <Navbar titles="Ahsan" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Routes>
            <Route exact path="/about" element={<About/>}>
              
            </Route> */}

          <TextForm heading="Enter Your Text Analyze You" mode={mode} showAlert={showAlert} />
              

          </div>
            {/* </Route>
          </Routes> */}
      {/* </Router> */}

    </>
  );
}

export default App;
