import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
        <div>
          {localStorage.getItem("token") ?
          <div>
            <ul>
              <li>
                <Link to="/logout" onClick={logout}> Logout </Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
          </div> : <Link to="/login">Login</Link>
          }
          </div>
          
          <Switch>
            <PrivateRoute exact path="/friendsList" component={FriendsList}> </PrivateRoute>
            
            <PrivateRoute path="/logout" component={Logout}></PrivateRoute>

            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />

          </Switch>
          
          
      </div>
    </Router>
  );
}

export default App;
