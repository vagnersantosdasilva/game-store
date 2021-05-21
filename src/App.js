import {BrowserRouter, Route, Switch} from "react-router-dom";
import Games from "./components/Games";
import React from 'react';

const App = ()=>{
  return (

      <BrowserRouter>
          <div className="App">

          </div>
          <Switch>
              <Route exact path ="/" component={Games}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
