import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Resume from "./routes/Resume";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:username" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
