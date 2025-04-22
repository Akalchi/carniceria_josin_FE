import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";


function App () {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F0FF]">
      
    <div className="flex-grow">
      <AppRoutes />
    </div>
  </div>
  );
};

export default App;
