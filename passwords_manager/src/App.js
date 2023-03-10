import RatePassword from "./componens/ratePassword/RatePassword";
import GeneratePassword from "./componens/generatePassword/generatePassword";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <RatePassword/>
     <GeneratePassword/>
    </div>
    </Router>
  );
}

export default App;
