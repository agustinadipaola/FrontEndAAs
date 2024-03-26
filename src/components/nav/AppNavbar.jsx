import { Link } from "react-router-dom";
import homeLogo from "../../pictures/homeLogo.png";
import { Navbar, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
const USER_TYPES = {
  PUBLIC: "",
  NORMAL_USER: "",
  ADMIN_USER: (
    <div>
      {" "}
      <MdAdminPanelSettings size={30} />
    </div>
  ),
};
const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER;
  // const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER

function AppNavbar() {
  return (
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

        {CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ? (
          <>
            <Link to="/item" className="roboto">
              <Button variant="light">
                <strong>CREATE ITEM</strong>
              </Button>
            </Link>{" "}
          </>
        ) : null}
        {CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ? (
          <>
            <Link to="/UserItems" className="roboto">
              <Button variant="light">
                <strong>ITEMS</strong>
              </Button>
            </Link>{" "}
          </>
        ) : null}

        {CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ? (
          <>
            <Link to="/login" className="roboto">
              <Button variant="dark">
                <strong>LOG IN</strong>
              </Button>
            </Link>{" "}
          </>
        ) : null}
        {CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ? (
          <>
            <Link
              className="nav-link icon-cart"
              to="/shopping"
              style={{ color: "black" }}
            >
              <Button variant="light">
                <FaShoppingCart size={30} />
                <span>
                  <strong> 0 </strong>
                </span>
              </Button>
            </Link>{" "}
          </>
        ) : null}

        <div>
          <strong>{CURRENT_USER_TYPE}</strong>{" "}
        </div>
      </Container>
    </Navbar>
  );

}

export default AppNavbar;
