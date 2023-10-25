import { AppContainer } from './app.style';
import InputContainer from './components/InputContainer/InputContainer';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
