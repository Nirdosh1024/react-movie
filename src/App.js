import React from 'react';

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Styles
import { GlobalStyle } from './GlobalStyle';


// import components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const  App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<Movie />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
