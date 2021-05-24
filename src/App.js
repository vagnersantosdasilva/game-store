import {BrowserRouter, Route, Switch} from "react-router-dom";
import Games from "./components/Games";
import React from 'react';
import GameDetails from "./components/GameDetails";

const App = ()=>{
  return (

      <BrowserRouter>
          <div className="App">
          </div>
          <Switch>
              <Route exact path ="/gamedetails/:id" component={GameDetails}></Route>
              <Route exact path ="/" component={Games}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
