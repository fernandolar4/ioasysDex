import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Favorites from "./pages/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/status" component={Stats} />
      <Route exact path="/favoritos" component={Favorites} />
    </Switch>
  );
};

export default Routes;
