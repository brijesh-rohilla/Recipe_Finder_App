import './App.css';
import Header from './Component/Header';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Home from './Component/Home1';
import Singlerecipe from './Component/Singlerecipe';
import Navbar from './Component/Navbar';
import Error from './Component/Error';
import Ingredients from './Component/Ingredients';

function App() {
  return (
    <Route>
      <main>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/header'exact component={Header}/>
          <Route path='/header/:id/:array' component={Singlerecipe} />
          <Route component={Error}/>
        </Switch>
      </main>
    </Route>
  );
}

export default App;
