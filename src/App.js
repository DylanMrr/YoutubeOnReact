import logo from './logo.svg';
import './App.css';
import  Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage'
import NavigatorPage from './pages/NavigatorPage/NavigatorPage';
import SubscriptionsPage from './pages/SubscribersPage/SubscriptionsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/search/:searchItem" element={<SearchPage />} />
          <Route path="/" element={<HomePage /> } />
          <Route path="/navigator" element={<NavigatorPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
