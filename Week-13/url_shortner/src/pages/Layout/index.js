import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./layout.css";


const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
