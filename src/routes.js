import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Favorites from "./pages/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/status" element={<Stats />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Switch>
  );
};

export default Routes;
