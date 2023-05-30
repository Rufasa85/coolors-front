import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./pages/AuthForm";
import FullPallet from "./pages/FullPallet";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NewPallet from "./pages/NewPallet";
import API from "./utils/API"
function App() {
  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.verifyToken(storedToken).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oh noes")
      console.log(err)
     logout();
    })
  },[])


  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
      setUserId(0);
  }

  return (
    <Router>
    <Navbar userId={userId} username={username} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home userId={userId} token={token}/>} />
        <Route path="/login" element={<AuthForm usage="Login" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}/>} />
        <Route path="/signup" element={<AuthForm usage="Signup" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}/>} />
        <Route path="/user/:username" element={<Profile userId={userId} token={token}/>} />
        <Route path="/pallet/:id" element={<FullPallet userId={userId}/>} />
        <Route path="/newpallet" element={<NewPallet token={token} username={username}/>} />
        <Route path="/*" element={<h2>Page not found</h2>} />

      </Routes>
      <hr />
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
