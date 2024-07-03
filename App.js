import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/Signup';
import Forget from './component/Forget';
import Navbar from './component/Navbar';
import Home from './component/Homes/index'
// import Coachfinder from './component/Coachfinder';
// import Home1 from './component/Homes/Home1';

function App() {
  return (
    <Router>
      <div className="App">
                  <Navbar/>
                  <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/Forget" element={<Forget />} />
                    {/* <Route path="/Coach" element={<Coachfinder />} /> */}
                  </Routes>
      </div>
    </Router>
  );
}
export default App;

