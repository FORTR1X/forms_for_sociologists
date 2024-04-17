import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/Home";
import Registration from "./component/Pages/Registration/Registration";
import Login from "./component/Pages/Login/Login";
import User from "./component/Pages/Account/User";
import SignInSignUp from "./component/Pages/SignInSignUp/SignInSignUp";
import Survey from "./component/Pages/Form/Survey";
import NewForm from "./component/Pages/Form/component/NewForm/NewForm.jsx"
import AllTeam from "./component/Pages/Account/AllTeam.jsx";
import OneTeam from "./component/Pages/Account/OneTeam.jsx";
import NewTeam from "./component/Pages/Account/NewTeam.jsx";


function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="signInUp" element={<SignInSignUp/>}></Route>
          {/* <Route path="registration" element={<Registration />}></Route> */}
          {/* <Route path="login" element={<Login />}></Route> */}
          <Route path="form" element={<Login />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="survey" element={<Survey/>}></Route>
          <Route path="newForm" element={<NewForm/>}></Route>
          <Route path="allTeam" element={<AllTeam/>}></Route>
          <Route path="oneTeam" element={<OneTeam/>}></Route>
          <Route path="newTeam" element={<NewTeam/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
