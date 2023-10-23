import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Register from './pages/register/Register';
import Wellness from './pages/wellness/Wellness';
import Resources from './pages/resources/Resources';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/wellness" element={user ? <Wellness /> : <Register />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
