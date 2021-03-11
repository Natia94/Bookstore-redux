import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import BookComponent from './components/BookComponent'
import BookDetails from './components/BookDetails';
import Navbar from "./components/NavigationBar";
import SignUpComponent from './components/SignUpComponent'
import SignInComponent from './components/SignInComponent'
import HomeComponent from './components/HomeComponent'
import UserAccount from './components/UserAccount'
import OrderHistory from './components/OrderHistory'
import history from './history'

import {
  Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  
  async componentDidMount(){
    const response = await axios.get(`http://localhost:8080/getBookCategories`)
    const data = response.data
    this.setState({ categories: data })
  }

  render (){
    //console.log('render state', this.state.categories)
    const category = this.state.categories
    return (
      <div>
        <Router history={history}>
          <Provider store={store}>

            {/* {
              category.map((item) => 
              <div>
                <Link to={"/category/"+item.categoryId+"/"+item.categoryName}>
                  {item.categoryName}
                </Link>
              </div>)
            } */}

          {/* <Link to = {`/bookDetails/${}`} */}
              <Navbar category = {category}/>
              <Switch>
                {/* <Route exact path="/"><UserAccount/></Route> */}
                <Route path="/home"><HomeComponent/></Route>
                <Route path="/userAccount"><UserAccount/></Route>
                <Route path ="/orderHistory"><OrderHistory/></Route>
                <Route path="/category/:id/:name"><BookComponent/></Route>
                <Route path="/book/:bookId/"><BookDetails/></Route>
                <Route path="/user/signup"><SignUpComponent/></Route>
                <Route path="/user/signin"><SignInComponent/></Route>
              </Switch>
          </Provider>
      </Router>
      </div>
    );
  }
}

export default App;
