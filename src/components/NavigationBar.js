import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {isLoggedIn} from '../redux/actions/siginInActionCreator'
import {useSelector, connect} from 'react-redux'
import logo from '../cart.png';
function NavigationBar (props) {
 
    const userData = useSelector(state => state.user.userLogedIn)
    const firstName = useSelector(state => state.user.user.firstName)

    //console.log('data from nav bar  => >>>', firstName)

    const links = props.category.map((item) =>
    
        <Nav.Link href={"/category/"+ item.categoryId + "/" + item.categoryName } key = {item.categoryId}>{item.categoryName}</Nav.Link>
    ) 
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">BookStack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="mr-auto">
                    {links}
                    </Nav>
                
                    {
                    !userData 
                    ? 
                    <Navbar.Text>
                        <a href={"/user/signin/"}>User</a> 
                    </Navbar.Text>
                    :
                        <NavDropdown title={" Signed in as: " + firstName} id="basic-nav-dropdown">
                            <NavDropdown.Item href={"/userAccount"}>Account</NavDropdown.Item>
                            <NavDropdown.Item href="/orderHistory">Orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signOut">Logout</NavDropdown.Item>
                        </NavDropdown>
                    }

                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="justify-content-end"
                        alt="React Bootstrap logo"
                    />

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    isLoggedIn: () => dispatch(isLoggedIn()),
  }
}

export default connect(null, mapDispatchToProps)(NavigationBar)
