import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute.js";
import Hero from "./components/Home/Hero";
import Docs from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard2" element={<Dashboard />} />
          <Route path="/dashboard" element={<Docs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
