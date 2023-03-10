import RatePassword from "../ratePassword/RatePassword";
import GeneratePassword from "../generatePassword/generatePassword";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from "../errors/notFound";
import './style.css';
import '../../helpers/background'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/ratePassword" />} />
          <Route path="/ratePassword" element={<RatePassword />} />
          <Route path="/generatePassword" element={<GeneratePassword/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
