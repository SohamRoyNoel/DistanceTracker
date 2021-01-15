import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './component/login/index';
import Admin from './component/admin/index';
import User from './component/user/index';

function App() {
  return (
    <>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Route path="/" component={Login} exact />
      </Switch>
    </>
  );
}

export default App;
