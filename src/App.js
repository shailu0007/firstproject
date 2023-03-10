import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showMessage =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    }

  const selectMode = ()=>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showMessage('Dark mode enabled','success')
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showMessage('Light mode enabled','success')
     }

  }
  return (
   <Router>
   <Navbar title="TextWorld" mode={mode} selectMode={selectMode} />
   <Alert alert={alert} />
   <Routes>
           <Route exact path="/firstproject/" element={<Textform showMessage={showMessage} heading="Enter text to analyze below" mode={mode}/>}/>
<<<<<<< HEAD
          <Route exact path="/about" element={<About/>} mode={mode}/>
          
=======
          <Route exact path="/about" element={<About />}/>
>>>>>>> d9a7568549081fd4ee7d5b93e8e13edbdd04a63b
        </Routes>
        </Router>
  );
}

export default App;
