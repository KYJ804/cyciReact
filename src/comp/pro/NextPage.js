import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './comp/pro/Login';
import NextPage from './comp/pro/NextPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
