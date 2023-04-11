import RatePassword from "../ratePassword/RatePassword";
import GeneratePassword from "../generatePassword/generatePassword";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFound from "../errors/notFound";
import About from "../About/about";
import Home from "../Home/Home";
import Amongus from "../Home/amongus/sus";
import Articles from "../Blogs/blogs";
import AccSec from "../Blogs/Account_Security";
import BG from "../../bg_componens/Home/Home";
import BGRP from "../../bg_componens/ratePassword/RatePassword";
import BGGP from "../../bg_componens/generatePassword/generatePassword";
import BGAB from "../../bg_componens/About/about";
import BGAR from "../../bg_componens/Blogs/blogs";
import BGAccSec from "../../bg_componens/Blogs/Account_Security";
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
          <Route path="/about" element={<About />} /> 
          <Route path="/amongus" element={<Amongus />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Account_Security" element={<AccSec />} />
          <Route path="/bg-BG/" element={<BG />} />
          <Route path="/bg-BG/ratePassword" element={<BGRP />} />
          <Route path="/bg-BG/generatePassword" element={<BGGP />} />
          <Route path="/bg-BG/about" element={<BGAB />} />
          <Route path="/bg-BG/articles" element={<BGAR />} />
          <Route path="/bg-BG/Account_Security" element={<BGAccSec />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
