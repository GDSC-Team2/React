import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemList from './component/ItemList';
import MyPage from './component/MyPage';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
