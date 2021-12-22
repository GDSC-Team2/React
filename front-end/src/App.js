import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;