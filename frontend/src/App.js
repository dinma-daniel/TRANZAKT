import "./Components/style.css";
import "./Components/signin.css";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={SignIn} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
