import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './index.css'
import Navbar from './components/Navbar'
import store from './store/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div className="App">
      <Provider  store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App