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
                  <Route path="/LoggerStart" exact component={() => <LoggerStart />} />
                  <Route path="/LoggerEnd" exact component={() => <LoggerEnd />} />
                  <Route path="/Summary" exact component={() => <Summary />} />
                  <Route path="/Home" exact component={() => <Home />} />
              </Switch>
              
              <Footer />
          </Router>




    </div>
  );
}

export default App;
