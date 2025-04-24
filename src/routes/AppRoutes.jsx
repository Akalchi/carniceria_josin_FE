import { Routes, Route } from "react-router-dom"; 
import Homepage from "../pages/Homepage";
import Inventory from "../pages/Inventory";

const AppRoutes = () => {
  return (
    
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
};
export default AppRoutes;