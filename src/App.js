import './App.css'
import Homepage from "./components/homepage/homepage"
import PartnerHomepage from "./components/partnerHomePage/partnerHomePage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import PartnerLogin from "./components/partnerLogin/partnerLogin"
import PartnerRegister from "./components/partnerRegister/parnerRegister"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id && user.userInfo === 'Admin' ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route exact path="/partner">
            {
              user && user._id && user.userInfo === 'Partner' ? <PartnerHomepage setLoginUser={setLoginUser} /> : <PartnerLogin setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/adminLogin">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/adminRegister">
            <Register />
          </Route>
          <Route path="/partnerRegister">
            <PartnerRegister/>
          </Route>
          <Route path="/partnerLogin">
            <PartnerLogin setLoginUser={setLoginUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
