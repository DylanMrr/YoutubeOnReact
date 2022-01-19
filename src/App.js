import logo from './logo.svg';
import './App.css';
import  Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchContainer from './components/SearchContainer/SearchContainer';
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/search/:searchItem" element={<SearchContainer />}>
            
          </Route>
          <Route path="/" element={<HomePage /> }>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
