import { Routes, Route } from "react-router-dom"; 
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";

const AppRoutes = () => {
  return (
    
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/admin-dashboard" element={<Homepage />} />
    </Routes>
  );
};
export default AppRoutes;