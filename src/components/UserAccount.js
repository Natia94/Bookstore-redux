import React,{useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {logInUser} from '../redux/actions/siginInActionCreator'
import { connect } from 'react-redux'

const backgroundStyle = {
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: '#258ea6'
}

const boxStyle = {
    width: "1000px",
    display: "flex",
    flexDirection: 'column',
    padding: "60px 60px 60px 60px",
    margin:"10px 10px 10px 10px",
    borderRadius: '10px',
    boxShadow: "0px 10px 50px #555",
    backgroundColor: '#ffffff'
}
const UserAccount = (props)=>{

    const {logInUser} = props
    
    // useEffect(() => {
    //     logInUser({userName:'admin', password: 'admin'})
    // }, [])

        //const addresses = props.user.addresses
        //const payments = props.user.payments
        //console.log('this.props >>>>>>>>>>>', props)
        
        return(
            <div style={backgroundStyle}>
                <h1>Account Details </h1>
                <div style={boxStyle}>
                    <h5>Profile Info</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Firstname: {}</ListGroup.Item>
                        <ListGroup.Item>Lastname: {}</ListGroup.Item>
                        <ListGroup.Item>Email: {}</ListGroup.Item>
                    </ListGroup>
                </div>

                <div style={boxStyle}>
                    <h5>Login Credentials</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Username: {}</ListGroup.Item>
                        <ListGroup.Item>Password: {}</ListGroup.Item>
                    </ListGroup>
                </div>

                <div style={boxStyle}>
                    <h5>Address</h5>
                    {/* {addresses.map(address => ( */}
                        <ListGroup variant="flush">
                            <ListGroup.Item>Street: {}</ListGroup.Item>
                            <ListGroup.Item>City: {}</ListGroup.Item>
                            <ListGroup.Item>State: {}</ListGroup.Item>
                            <ListGroup.Item>Zipcode: {}</ListGroup.Item>
                        </ListGroup>
                    {/* ))} */}
                </div>

                <div style={boxStyle}>
                    <h5>Payments</h5>
                    {/* {payments.map((payment) => ( */}
                        <ListGroup variant="flush">
                        <ListGroup.Item>Name on Card:  {}</ListGroup.Item>
                        <ListGroup.Item>Card: {}</ListGroup.Item>
                        <ListGroup.Item>Exparation: {}</ListGroup.Item>
                        <ListGroup.Item>CVC: {}</ListGroup.Item>
                    </ListGroup>
                    {/* ))}  */}
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
      user: state.user.userState
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      logInUser: (userObj) => dispatch(logInUser(userObj))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)