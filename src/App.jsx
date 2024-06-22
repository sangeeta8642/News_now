import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import MyFavorites from "./Pages/MyFavorites";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorites" element={<MyFavorites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
