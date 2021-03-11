import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import "../../src/RegisterComponent.css";
import {signUpUser} from '../redux/actions/signUpActionCreator'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
  
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  
  return valid;
};

class SignUpComponent extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        firstName:'',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        formErrors: {
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: ""
        }
      };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();
      if (formValid(this.state)) {
        console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        User Name: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        `);

      const signUpcredentials = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName, 
        email: this.state.email,
        password: this.state.password
      }
      this.props.signUpUser(signUpcredentials)
      } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    
    switch (name) {
      case "firstName":
        formErrors.firstName =
        value.length < 3 ? "minimum 3 characaters required" : "";
      break;

      case "lastName":
        formErrors.lastName =
        value.length < 3 ? "minimum 3 characaters required" : "";
      break;

      case "userName":
        formErrors.userName =
        value.length < 3 ? "minimum 3 characaters required" : "";
      break;

      case "email":
        formErrors.email = emailRegex.test(value)
        ? ""
        : "invalid email address";
      break;

      case "password":
        formErrors.password =
        value.length < 6 ? "minimum 6 characaters required" : "";
      break;

      default:
        break;
      }
    this.setState({ formErrors, [name]:value }, () => console.log(this.state));
  };


  render () {
    const { formErrors } = this.state;
      return(
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>

              <div className = 'userName'>
                <label htmlFor="useName">User Name</label>
                <input
                  className={formErrors.userName.length > 0 ? "error" : null}
                  placeholder="User Name"
                  type="text"
                  name="userName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.userName.length > 0 && (
                  <span className="errorMessage">{formErrors.userName}</span>
                )}
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>

              <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              </div>

              <div className="createAccount">
                <button type="submit">Create Account</button>
                <Link to={"/user/signin"}>Already Have an Account?</Link>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    signUp: state.signUp.userSignUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (userObj) => dispatch(signUpUser(userObj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent)


