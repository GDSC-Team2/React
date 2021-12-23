import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import Create from './components/Create';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;