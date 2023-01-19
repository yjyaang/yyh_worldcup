import React, {useState} from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Start from './components/Start';
import Result from './components/Result';

function App() {

  const [voteResult, setvoteResult] = useState(JSON.parse(localStorage.getItem('voteResult')) || [])

  return (
    <div className='app-wrap'>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/main" element={<Main voteResult={voteResult} setvoteResult={setvoteResult} />} />
          <Route path="/result" element={<Result voteResult={voteResult}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
