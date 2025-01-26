import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/dashboard.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Client from "./pages/Client.jsx";
import Opt from "./pages/Opt.jsx";
import Vendor from "./pages/Vendor.jsx";
import Board from "./pages/Board.jsx";
import Bid from "./pages/Bid.jsx";
import StopBid from "./pages/StopBid.jsx";
import DoneBid from "./pages/DoneBid.jsx";
import SignUp from "./pages/Signup.jsx";
import { AuthProvider } from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/client" element={<Client />}></Route>
          <Route path="/vendor" element={<Vendor />}></Route>
          <Route path="/bid" element={<Bid />}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/opt" element={<Opt/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    <Bid />
  </StrictMode>
);
