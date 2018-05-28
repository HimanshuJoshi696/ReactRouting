import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Prompt
} from "react-router-dom";
import Modal from "react-modal";
import "./index.css";
const NavBar = () => (
  <div className="MenuLeftSection">
    <NavLink exact activeClassName="selected" to="/">
      Himanshu
    </NavLink>
    <NavLink activeClassName="selected" to="/component-two">
      Nakul
    </NavLink>
    <NavLink activeClassName="selected" to="/component-three">
      Satya
    </NavLink>
    <NavLink activeClassName="selected" to="/login">
      Login
    </NavLink>
    <NavLink activeClassName="selected" to="/userModal">
      User Modal
    </NavLink>
    <NavLink activeClassName="selected" to="/control-component">
      Control Component
    </NavLink>
    <NavLink activeClassName="selected" to="/user-login">
      User Login
    </NavLink>
  </div>
);

const ComponentHimanshu = () => (
  <div className="rightSection">
    <h1>Welcome Himanshu</h1>
  </div>
);
const ComponentNakul = () => (
  <div className="rightSection">
    <h1>Welcome Nakul</h1>
    <NavLink activeClassName="selected" to="/component-two/city">
      city
    </NavLink>
    <NavLink activeClassName="selected" to="/component-two/sports">
      sports
    </NavLink>
    <Route path="/component-two/:contentName" component={NakulCrushDetails} />
  </div>
);

const NakulCrushDetails = props => (
  <div>
    <div>
      {props.match.params.contentName ? (
        <div>
          <img
            src={
              "http://lorempixel.com/400/200/" +
              props.match.params.contentName +
              "/1/"
            }
            alt=""
          />{" "}
        </div>
      ) : null}
    </div>
  </div>
);

const ComponentSatya = () => (
  <div className="rightSection">
    <h1>Welcome Satya</h1>
  </div>
);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isChanged: false
    };
  }
  render() {
    return (
      <section>
        <Prompt
          when={this.state.isChanged}
          message="Are you really leave this page?"
        />
        <h1>This is User Login form </h1>
        <input
          type="text"
          onChange={() => {
            this.setState({
              isChanged: true
            });
          }}
        />
      </section>
    );
  }
}

class UserModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }
  showToogle = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    return (
      <section>
        <h1>Welcome to user Modal page</h1>
        <button type="button" onClick={this.showToogle}>
          Show Modal{" "}
        </button>
        <Modal isOpen={this.state.isActive} onRequestClose={this.showToogle}>
          Welcome to Modal body
          <button type="button" onClick={this.showToogle}>
            Hide Modal
          </button>
        </Modal>
      </section>
    );
  }
}

class ControlComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }
  changeValue = event => {
    this.setState({
      content: event.target.value
    });
  };
  submitValue = () => {
    console.log("yes its clicked");
  };
  render() {
    return (
      <section>
        <h1>Welcome to control Component </h1>

        <input type="text" onChange={this.changeValue} />
        <button
          disabled={this.state.content.length ? false : true}
          onClick={this.submitValue}
        >
          submit
        </button>
        <h2>{this.state.content}</h2>
      </section>
    );
  }
}

class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Himanshu",
      password: "12345"
    };
    this.userLoginControl = this.userLoginControl.bind(this);
  }
  userLoginControl() {
    var variableUserName = this.inputUserName.value;
    console.log(variableUserName);
    var variableUserPassword = this.inputUserPassword.value;

    console.log(variableUserPassword);
    if (
      variableUserName == this.state.userName &&
      variableUserPassword == this.state.password
    ) {
      alert("yes go ahead");

    } else {
      alert("sorry");
    }
  }
  render() {
    return (
      <section className="userLoginInputBox">
        <h1>User Login</h1>
        <input
          type="text"
          name="user name"
          ref={input => {
            this.inputUserName = input;
          }}
        />
        <input
          type="password"
          name="user password"
          ref={input => {
            this.inputUserPassword = input;
          }}
        />
        <button type="submit" onClick={this.userLoginControl}>
          {" "}
          Login{" "}
        </button>
      </section>
    );
  }
}
ReactDom.render(
  <Router>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={ComponentHimanshu} />
      <Route path="/component-two" component={ComponentNakul} />
      <Route path="/component-three" component={ComponentSatya} />
      <Route path="/login" component={Login} />
      <Route path="/userModal" component={UserModal} />
      <Route path="/control-component" component={ControlComponent} />
      <Route path="/user-login" component={UserLogin} />
    </div>
  </Router>,
  document.getElementById("root")
);
