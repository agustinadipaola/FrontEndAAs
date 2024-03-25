import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AddItemToCart from "./components/cart/AddItemToCart";
import AddItem from "./components/item/AddItem";
import DisplayCartContent from "./components/cart/DisplayCartContent";
import UpdateCartItem from "./components/item/UpdateCartItem";
import BuyerCart from "./components/cart/BuyerCart";
import DisplayStockItems from "./components/item/DisplayStockItems";
import homeLogo from "./pictures/homeLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/login/LogIn";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import WelcomeDashboard from "./components/login/Dashboard";
import SignupForm from "./components/login/SignUpForm";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import SignUpDashboard from "./components/login/SignUpDashboard";

function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          {/* <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "#526899", }}> */}

          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <a className="navbar-brand" href="/">
                <img
                  className="navbar-brand"
                  href="/home"
                  alt="Big Cart Saver Logo"
                  style={{ width: "15%" }}
                  src={homeLogo}
                ></img>
              </a>

              {/* <Link to="/home" className="roboto">
                <Button variant="light">HOME</Button>
              </Link> */}
              <Link to="/cart" className="roboto">
                <Button variant="light">
                  <strong>CART</strong>
                </Button>
              </Link>
              <Link to="/item" className="roboto">
                <Button variant="light">
                  <strong>CREATE ITEM</strong>
                </Button>
              </Link>

              <Link to="/login" className="roboto">
                <Button variant="dark">
                  <strong>LOG IN</strong>{" "}
                </Button>
              </Link>
              <Link
                className="nav-link icon-cart"
                to="/shopping"
                style={{ color: "black" }}
              >
                {" "}
                <Button variant="light">
                  <FaShoppingCart size={30} />
                  <span>
                    <strong> 0</strong>
                  </span>
                </Button>
              </Link>
            </Container>
          </Navbar>

          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<AddItemToCart />} />
            <Route path="/item" element={<AddItem />} />

            <Route path="/cart/get/:id" element={<DisplayCartContent />} />
            <Route path="/item/update/:id" element={<UpdateCartItem />} />
            <Route path="/shopping" element={<DisplayCartContent />} />

            <Route path="/item" element={<DisplayStockItems />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<WelcomeDashboard />} />
            <Route path="/welcomesignup" element={<SignUpDashboard />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
