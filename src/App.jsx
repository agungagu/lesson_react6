import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Coments from "./pages/Coments";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
