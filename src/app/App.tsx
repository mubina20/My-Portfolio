import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/header';
import { About } from './screens/about';
import Skills from './screens/skills';
import Portfolio from './screens/portfolio';
import Education from './screens/certificate';
import { Home } from './screens/homepage';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
