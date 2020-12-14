import { Component } from "react";
import "./App.css"
import Nav from "./Components/Nav";
import routes from "./routes";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="">
        {this.props.location.pathname === "/" ? (
          <div className="">{routes}</div>
        ) : (
          <div>
            <Nav />
            {routes}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
