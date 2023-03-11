import RatePassword from "../ratePassword/RatePassword";
import GeneratePassword from "../generatePassword/generatePassword";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFound from "../errors/notFound";
import About from "../About/about";
import Home from "../Home/Home";
import Amongus from "../Home/amongus/sus";
import './style.css';
import '../../helpers/background';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ratePassword" element={<RatePassword />} />
          <Route path="/generatePassword" element={<GeneratePassword/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/amongus" element={<Amongus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
