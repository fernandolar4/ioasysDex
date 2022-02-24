import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Favorites from "./pages/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/stats" exact element={<Stats />} />
      <Route path="/favorites" exact element={<Favorites />} />
    </Switch>
  );
};

export default Routes;
