import React from "react";
import "./App.scss";
import FixedMenu from "./FixedMenu";
import Footer from "./Footer";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyModal from "./MyModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({
      popupOpen: true,
    });
  }
  closePopup() {
    this.setState({
      popupOpen: false,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MyModal show={this.state.popupOpen} onHide={this.closePopup} />
          <FixedMenu />
          <section className="main">
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="">
                <LandingPage openPopup={this.openPopup} />
              </Route>
            </Switch>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
