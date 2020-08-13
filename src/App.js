import React, { Fragment } from "react";
import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Store from "./globalStore/store";

function App() {
  return (
    <Fragment>
      <Store>
        <Theme>
          <GlobalStyle />
          <Header />
          {/*<Router />*/}
          <Footer />
        </Theme>
      </Store>
    </Fragment>
  );
}

export default App;
