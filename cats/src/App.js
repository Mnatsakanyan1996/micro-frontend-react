import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import RandomCat from './components/RandomCat';
import GreetingCat from './components/GreetingCat';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
};

export default App;
