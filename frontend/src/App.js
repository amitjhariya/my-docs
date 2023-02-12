import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.js";
import Hero from "./components/Home/Hero";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
