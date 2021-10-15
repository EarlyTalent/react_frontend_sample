import logo from './levvel-logo.svg';
import './App.css';
import Header from './header'
import BlogDetails from './BlogDetails';
import Articles from './articles'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path = "/">
          <Header header="Levvel's Food Blog"></Header>
          <Articles> </Articles>
        </Route>
        <Route path="/blogs/:id">
          <Header header="Levvel's Food Blog"></Header>
              <BlogDetails />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
