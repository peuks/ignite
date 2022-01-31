import { GlobalStyles } from "components";
import Nav from "components/Nav";
import Home from "pages/Home";
import { Route } from "react-router-dom";

// import logo from "./logo.svg";
const App = () => (
  <div className="App">
    <GlobalStyles />
    {/* 
      When our Route says "/" we render Home component.
      When our Route says "/game/:id" we also render Home component.

      */}
    <Route path={["/game/:id", "/"]}>
      <Nav />
      <Home />
    </Route>
  </div>
);

export default App;
