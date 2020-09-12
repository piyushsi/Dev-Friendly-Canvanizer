import React from "react";
import Header from "./Components/Common/Header";
import LeanCanvas from "./Components/LeanCanvas";
import AddYaml from "./Components/AddYaml/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import "./App.css";

function App() {
  const [isYaml, setIsYaml] = React.useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header data={isYaml} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path="/Dev-Friendly-Canvanizer"
            render={(props) => <HomePage {...props} />}
          />
          <Route
            exact
            path="/model"
            render={(props) => <LeanCanvas {...props} data={isYaml} />}
          />
          <Route
            exact
            path="/add"
            render={(props) => <AddYaml {...props} data={setIsYaml} />}
          />
          <Route
            exact
            path="/live"
            render={(props) => (
              <>
                <AddYaml {...props} data={setIsYaml} />
                <LeanCanvas {...props} data={isYaml} />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
