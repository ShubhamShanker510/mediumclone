import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          path='/getting-started' element={<HomePage/>}
          ></Route>
        </Routes>
     </BrowserRouter> 
   </>
  );
}

export default App;
