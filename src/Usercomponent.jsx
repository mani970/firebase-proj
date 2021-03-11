import React, { Component } from "react";
import firebase from "./firebase";

class Usercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      passwordData: "",
      emailAddress: "",
      mobile: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let {
        username,
        firstname,
        lastname,
        passwordData,
        emailAddress,
        mobile,
      } = this.state;
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, passwordData)
        .then((data) => {
          console.log(data);
          firebase.database().ref().child("/users").set({
            username,
            emailAddress,
            firstname,
            lastname,
            mobile,
            RegistrationDate: new Date().toString(),
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <section className="col-md-4 mx-auto my-2 card">
        <h2 className="text-dark font-weight-bold pb-2 text-center">Login</h2>
        <div className="card-body">
          <form action="/" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordData">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordData"
                name="passwordData"
                value={this.state.passwordData}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email</label>
              <input
                type="email"
                name="emailAddress"
                className="form-control"
                id="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="number"
                name="mobile"
                className="form-control"
                id="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
              />
            </div>
            <div className="fom-group">
              <button className="btn btn-block btn-dark">Login</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Usercomponent;
