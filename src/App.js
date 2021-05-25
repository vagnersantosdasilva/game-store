import {BrowserRouter, Route, Switch} from "react-router-dom";
import Games from "./components/Games";
import React from 'react';
import GameDetails from "./components/GameDetails";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import {AuthContext, useAuth} from "./hooks/useAuth";

const App = ()=>{
    const auth = useAuth();
    return (
        <AuthContext.Provider value = {auth}>
            <BrowserRouter>
              <div className="App">
                  <NavBar />
                  <div>
                      <Switch>
                          <Route exact path ="/cart" component={ShoppingCart}></Route>
                          <Route exact path ="/gamedetails/:id" component={GameDetails}></Route>
                          <Route exact path ="/" component={Games}></Route>
                      </Switch>
                  </div>
              </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
