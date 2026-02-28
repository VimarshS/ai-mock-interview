import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import API from "./services/api";

function Home() {

  useEffect(() => {
    API.get("/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;