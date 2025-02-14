import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SuccessReg from "./pages/SuccessReg";
import DownloadReg from "./pages/DownloadReg";
import CuetData from "./components/dashboard/CuetData";
import StudentList from "./components/dashboard/StudentList";
import Selection from "./components/dashboard/Selection";
import Settings from "./components/dashboard/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success-registration" element={<SuccessReg />} />
          <Route path="/download-registration" element={<DownloadReg />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cuet-data" element={<CuetData />} />
          <Route path="/dashboard/student-list" element={<StudentList />} />
          <Route path="/dashboard/selection" element={<Selection />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
