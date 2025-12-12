import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="flex flex-col gap-3 w-1/9">
          <NavLink to="/about">about me</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/blog">blog</NavLink>
        </div>
        <div className="w-3/9">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Nav;
