import React from 'react'
import "../../src/RegisterComponent.css";
import {Link} from 'react-router-dom'
import {isLoggedIn, logInUser} from '../redux/actions/siginInActionCreator'
import { connect } from 'react-redux'
//import HomeComponent from './HomeComponent'
import history from '../history'

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

class SignInComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      formErrors: {
        userName: "",
        password: ""
      }
    } 
  }
     
  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      User Name: ${this.state.userName}
      Password: ${this.state.password}
      `);
      const credentials = {userName: this.state.userName, password: this.state.password}
      this.props.logInUser(credentials)
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    history.push('/home')
  };
    
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
        
    switch (name) {
      case "userName":
        formErrors.userName =
        value.length < 3 ? "minimum 3 characaters required" : "";
      break;

      case "password":
        formErrors.password =
        value.length < 3 ? "minimum 6 characaters required" : "";
      break;
    
      default:
      break;
    }
    this.setState({ formErrors, [name]:value }, () => console.log(this.state));
  };

 
  render () {
    const { formErrors } = this.state;
     // console.log('props from LOG IN PAGE ====== >>>>>>>>>>>', this.props)
    return(
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
              <div className = 'userName'>
                <label htmlFor="userName">User Name</label>
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
                <button type="submit">Log In</button>
                <Link to={"/user/signup"}>Do Not Have an Account?</Link>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (userObj) => dispatch(logInUser(userObj)),
    isLoggedIn: () => dispatch(isLoggedIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent)

