import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Artists from '../Artists/Artists';
import Explore from '../Explore/Explore';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MyPage from '../MyPage/MyPage';

function App() {
  return (
    <div className="App">
      <Navbar />
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
