import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Artists from '../Artists/Artists';
import Explore from '../Explore/Explore';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MyPage from '../MyPage/MyPage';

function App() {
  const [ user, setUser ] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        })
      };
    });
  }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path='/' element={<Home />}
        />
        <Route path='/home' element={<Home />}
        />
        <Route path='/artists' element={<Artists />}
        />
        <Route path='/explore' element={<Explore />}
        />
        <Route path='/login' element={<Login />}
        />
        <Route path='/signup' element={<Signup />}
        />
        <Route path='/mypage' element={<MyPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
