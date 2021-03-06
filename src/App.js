import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import Login from './components/pages/Login/'
import Index from './components/pages/Index/Index.jsx'
import RegisterPage from './components/pages/Register/'
import FreeHelp from './components/pages/FreeHelp'
import UserProfile from './components/pages/UserProfile';
import News from './components/pages/News';
import FreeQuestion from './components/pages/FreeQuestion/FreeQuestion';
import Settings from './components/pages/Settings/Settings';
import PaidHelp from './components/pages/PaidHelp/index'
import { createBrowserHistory } from "history";
import { useSelector } from 'react-redux';
import FleaMarket from './components/pages/FleaMarket';
import Library from './components/pages/Library/Library';

function App(props) {
  
  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
        <Switch>
          <Route path="/login" props={customHistory} component={Login}  />
          <Route exact path='/' component={Index} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/free-help' exact component={FreeHelp} />
          <Route path='/profile/:id' props={customHistory} component={UserProfile} />
          <Route path='/news' component={News} />
          <Route path='/free-help/question/:id' component={FreeQuestion} />
          <Route path="/paid-help" exact component={PaidHelp}/>
          <Route path="/flea-market" exact component={FleaMarket}/>
          <Route path="/library" exact component={Library}/>
          <Route path='/settings' component={Settings}/>
        </Switch>
    </Router>
  );
}

export default App;
