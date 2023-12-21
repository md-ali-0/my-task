import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../../components/Container";
const Header = () => {
  return (
    <header className="border-b border-gray-200 py-5">
      <Container>
        <nav className="flex flex-wrap justify-between items-center">
          <Link to="/">
            <img className="w-32" src={logo} alt="Logo" />
          </Link>
          <ul className="flex flex-col md:flex-row uppercase font-medium text-sm text-secondary justify-center items-center gap-3">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div>
            <Link className="btn btn-primary" to="/login">Login</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
