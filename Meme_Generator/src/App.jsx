import React, { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home';
import EditPage from './pages/Edit';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setShowForm(false);
  };

  return (
    <>
       <h1 style={{marginLeft : '600px', color:'red'}}>Meme Generator</h1>
       <hr />
       <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/edit' element={<EditPage/>}></Route>
       </Routes>
    </>
  );
};

export default App;
