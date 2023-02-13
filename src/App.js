import React, { useEffect } from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Start from './components/Start';
import Result from './components/Result';
import { setOneVh } from './styles/setOneVh';

function App() {

  useEffect(() => {
    setOneVh();
      window.addEventListener('resize', setOneVh);
  }, []);

  return (
    <div className='app-wrap'>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/main" element={<Main />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
