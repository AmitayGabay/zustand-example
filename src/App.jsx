import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import ShopPage from './pages/shopPage';
import CartPage from './pages/CartPage';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
