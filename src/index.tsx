import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Book_Inventory, Contact, About } from './components'
import './style.css'
//import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './Redux/store'

const temp_props = "Book Library"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route exact path='/book_inventory'>
          <Book_Inventory></Book_Inventory>
        </Route>
        <Route exact path='/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>


      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);