import './App.css';
import Navigation from "./Navigation";
import Starter from "./Starter";
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Detail from "./Detail"
import Soup from "./Soup";
import Maincourse from "./Maincourse";
import Dessert from "./Dessert";
import Drink from "./Drink";

function App() {
  return (
    <div className="App">
        <Router>
     <Navigation/>
     <Switch>
         <Route path="/starter/:actualid"render={(props) => <Detail{...props}/>} exact>
         </Route>
         <Route path={"/starter"} exact>
             <Starter></Starter>
         </Route>
         <Route path="/soup/:actualid"render={(props) => <Detail{...props}/>} exact>
         </Route>
         <Route path={"/soup"} exact>
             <Soup></Soup>
         </Route>
         <Route path="/maincourse/:actualid" render={(props) => <Detail{...props}/>} exact>
         </Route>
         <Route path={"/maincourse"} exact>
             <Maincourse></Maincourse>
         </Route>
         <Route path="/dessert/:actualid" render={(props) => <Detail{...props}/>} exact>
         </Route>
         <Route path={"/dessert"} exact>
             <Dessert></Dessert>
         </Route>
         <Route path="/drink/:actualid" render={(props) => <Detail{...props}/>} exact>
         </Route>
         <Route path={"/drink"} exact>
             <Drink></Drink>
         </Route>
     </Switch>
        </Router>
    </div>
  );
}

export default App;
