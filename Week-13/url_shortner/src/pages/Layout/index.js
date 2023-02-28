import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import "./layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul className="nav-header">
          <li>
            <Link
              className={location.pathname === "/" ? "nav-active" : ""}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "nav-active" : ""}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/contact" ? "nav-active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
