import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary text-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <Link to="/"> Bookish</Link>
        </span>

        <nav className="d-flex gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/extra">Extra</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
