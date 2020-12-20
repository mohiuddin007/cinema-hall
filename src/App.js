import React, { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddMovie from './components/AddMovie/AddMovie';
import Login from './components/Login/Login';
import Book from './components/Home/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const InformationContext = createContext();

function App() {
  const [allInfo, setAllInfo] = useState({});
  return (
    <InformationContext.Provider value={[allInfo, setAllInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addMovie">
            <AddMovie/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/bookSeat/:id">
            <Book/>
          </PrivateRoute>
        </Switch>
      </Router>
    </InformationContext.Provider>
  );
}

export default App;
