import "./Components/style.css";
import "./Components/signin.css";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/Signup"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUpPage from './Components/SignUpPage';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/" component={SignIn} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
