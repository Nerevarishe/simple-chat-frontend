import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Store from "./globalStore/store";
import LoginPage from "./containers/LoginPage";
import ChatPage from "./containers/ChatPage";
import ChatListPage from "./containers/ChatListPage";
import PeoplesPage from "./containers/PeoplesPage";
import Main from "./containers/Layout/Main";

function App() {
  return (
    <Fragment>
      <Store>
        <Theme>
          <GlobalStyle />
          <Router>
            <Header />
            <Main>
              <Switch>
                <Route path="/login_page" component={LoginPage} />
                <Route exact path="/" component={LoginPage} />
                <Route path="/chat_page" component={ChatPage} />
                <Route path="/chat_list_page" component={ChatListPage} />
                <Route path="/peoples_page" component={PeoplesPage} />
              </Switch>
            </Main>
            <Footer />
          </Router>
        </Theme>
      </Store>
    </Fragment>
  );
}

export default App;
