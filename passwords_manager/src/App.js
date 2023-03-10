import RatePassword from "./componens/ratePassword/RatePassword";
import GeneratePassword from "./componens/generatePassword/generatePassword";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "./componens/errors/notFound";

function App() {
  return (
    <Router>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/ratePassword" />} />
          <Route path="/ratePassword" element={<RatePassword />} />
          <Route path="/generatePassword" element={<Navigate replace to="/ratePassword" />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Router>
  );
}

export default App;
