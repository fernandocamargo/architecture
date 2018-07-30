import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { locale } from "i18n";
import { store, persistor } from "store";
import App from "components/app";

import {
  Cockpit,
  Rankings,
  Reviews,
  Spy,
  Inventory,
  Profit,
  PPCManager
} from "components/features";

export default () => (
  <IntlProvider locale={locale}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App>
            <Route path="/" component={Cockpit} exact />
            <Route path="/rankings" component={Rankings} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/spy" component={Spy} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/profit" component={Profit} />
            <Route path="/ppc-manager" component={PPCManager} />
          </App>
        </Router>
      </PersistGate>
    </Provider>
  </IntlProvider>
);
