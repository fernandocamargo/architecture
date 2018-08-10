import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import { locale } from "i18n";
import { store, persistor } from "store";
import theme from "theming/default";
import App from "components/app";

export default () => (
  <IntlProvider locale={locale}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  </IntlProvider>
);
