
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'

import PrivateRoute from './authentication/PrivateRoute';

import Homepage from './components/Homepage';
import Login from "./components/Login";
import FriendContainer from './components/friends/FriendContainer';

function App() {

  let history = useHistory();

  return (
    <div>

      <Router>

        <Switch>

          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/friendContainer' component={FriendContainer} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
