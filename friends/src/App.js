import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

function App() {

  const logout = (props) => {
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/login"> Login </Link>
            </li>

            <li>
              <Link to="/logout" onClick={logout}> Logout </Link>
            </li>

            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList}> </PrivateRoute>
            
            <PrivateRoute path="/logout" component={Logout}></PrivateRoute>

            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />

          </Switch>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
