import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./components/user/UserHome";
import AddItemToCart from "./components/cart/AddItemToCart";
import CreateItem from "./components/admin/CreateItem";
import DisplayCartContent from "./components/cart/DisplayCartContent";
import UpdateCartItem from "./components/item/UpdateCartItem";
import DisplayStockItems from "./components/item/DisplayStockItems";
import LogIn from "./components/login/LogIn";
import WelcomeDashboard from "./components/login/Dashboard";
import SignupForm from "./components/login/SignUpForm";
import SignUpDashboard from "./components/login/SignUpDashboard";
import UserItems from "./components/item/UserItems";
import AppNavbar from "./components/nav/AppNavbar";
import AdminHome from "./components/admin/AdminHome";
import Checkout from "./components/user/Checkout";
import SaveForLater from "./components/user/SaveForLater";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/item/:id" element={<AddItemToCart />} />
        <Route path="/item" element={<CreateItem />} />
        <Route path="/cart/get/:id" element={<DisplayCartContent />} />
        <Route path="/item/update/:id" element={<UpdateCartItem />} />
        <Route path="/shopping" element={<DisplayCartContent />} />
        <Route path="/item" element={<DisplayStockItems />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<WelcomeDashboard />} />
        <Route path="/welcomesignup" element={<SignUpDashboard />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/UserItems" element={<UserItems />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/save-for-later" element={<SaveForLater />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
