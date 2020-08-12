import React, { Fragment } from "react";
import Header from "./containers/Layout/Header";
import Theme from "./theme";

function App() {
  return (
    <Fragment>
      <Theme>
        <Header />
        {/*<Router />*/}
        {/* <Footer /> */}
      </Theme>
    </Fragment>
  );
}

export default App;
