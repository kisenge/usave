import logo from './logo.svg';
import './App.css';
import { Home, Summary, LoggerStart, LoggerEnd, Footer, Navigation } from "./Pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Router>
              <Navigation />
              <Switch>
                  <Route path="/" exact component={() => <Home />} />
                 
              </Switch>
              <Footer />
          </Router>




    </div>
  );
}

export default App;
