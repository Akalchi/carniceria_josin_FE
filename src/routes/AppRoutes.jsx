import { Routes, Route } from "react-router-dom"; 
import Homepage from "../pages/Homepage";

const AppRoutes = () => {
  return (
    
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
export default AppRoutes;