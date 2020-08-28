import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import LandingPage from './screens/LandingPage';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route path={"/"} component={LandingPage} />
    </Router>
    </Provider>
  );
}

export default App;
