import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
     <Register/>

     {/* <BrowserRouter>
    <Switch>
    
      <Route exact path='/Registration' component={Registration}></Route>
  </Switch>
 </BrowserRouter> */}
    </div>
  );
}

export default App;
