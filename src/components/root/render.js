import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

import { locale } from "i18n";
import { store, persistor } from "store";
import App from "components/app";
import Routes from "components/routes";
import Route from "components/route";
import { Overview, Costs, NotFound } from "components/pages";

export default () => (
  <IntlProvider locale={locale}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App>
            <Routes>
              <Route exact path="/" component={Overview} />
              <Route exact path="/costs" component={Costs} />
              <Route component={NotFound} />
            </Routes>
          </App>
        </Router>
      </PersistGate>
    </Provider>
  </IntlProvider>
);
