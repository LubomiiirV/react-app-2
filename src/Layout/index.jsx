import "./index.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>My First SPA</h1>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/services" >Services</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Na tejto stránke pracoval @LuboWeb</p>
      </footer>
    </>
  );
}

export default Layout;
