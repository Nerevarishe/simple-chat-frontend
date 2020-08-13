import React, { Fragment } from "react";
import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Theme from "./theme";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Fragment>
      <Theme>
        <GlobalStyle />
        <Header />
        {/*<Router />*/}
        <Footer />
      </Theme>
    </Fragment>
  );
}

export default App;
