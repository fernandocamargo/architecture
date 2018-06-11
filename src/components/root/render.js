import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { store, persistor } from 'store';
import App from 'components/app';
import Routes from 'components/routes';
import Route from 'components/route';
import { Login, Home, Profile, NotFound } from 'components/pages';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Routes>
        </App>
      </Router>
    </PersistGate>
  </Provider>
);
