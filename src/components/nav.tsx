import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen">
        {/* <div className="flex flex-col gap-3 w-1/9 outline"> */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 md:mt-50 lg:mt-50 m-10">
          <div className="flex flex-col gap-3 w-1/4 self-start md:sticky lg:sticky top-10">
            <NavLink to="/about">about</NavLink>
            <NavLink to="/projects">projects</NavLink>
            {/* <NavLink to="/blog">blog</NavLink> */}
          </div>
          <div className="self-start w-full sm:w-[500px] lg:w-[700px] mb-10">
            {/* <div className="w-3/9 outline"> */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
