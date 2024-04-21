import { NavLink, Outlet } from "react-router-dom";

import BreadCrumbs from "../components/BreadCrumbs";

function RootLayout() {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Amir Router</h1>

          <div>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="about"> About Us </NavLink>
            <NavLink to="help"> Help </NavLink>
            <NavLink to="careers"> Careers </NavLink>
          </div>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
