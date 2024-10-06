import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateCoin from "./pages/CreateCoin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./conjext";

export default function App() {
  return (
    <GlobalProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateCoin />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
