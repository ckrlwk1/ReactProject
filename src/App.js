import logo from './logo.svg';

import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Header from './layout/Header';
import Main from './layout/Main';
import Product from './views/Product';
import Footer from './layout/Footer';

// import './App.css';

function App() {
    const [hello, setHello] = useState({})

    useEffect(() => {
        axios.get('/api/hello')
            .then(response =>
                setHello(response.data)
            )
            // .then(response =>  setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <Router>
            <Header />
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/product" element={<Product />} />
                    </Routes>
                </div>
            <Footer />
        </Router>
    );

  // return (
  //     <div className='App'>
  //       <Header />
  //       <Main />
  //       <Product />
  //     </div>
  // );
}

export default App;

