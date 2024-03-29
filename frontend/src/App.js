import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Signup from "./components/signup/Signup";
import{ BrowserRouter as Router, Routes, Ro, Route} from "react-router-dom";
import SignIn from "./components/signup/SignIn";
import Todo from "./components/todo/Todo";
const App = () => {
  return (
    <div>
      <Router>
       <Navbar />
       <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/todo"  element={<Todo />} />
        <Route exact path="/signup"  element={<Signup/>} />
        <Route exact path="/signin"  element={<SignIn/>} />
       </Routes>
      </Router>
     
      
      
       
       <Footer/>
       
       
    </div>
    );
};

export default App;
