import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <>
      <div>
        <h1 className="text-xl pb-5">Projects</h1>
        <div className="flex flex-col gap-3">
          <div>
            <NavLink to="/serrelab" className="text-md">
              Serre Lab
            </NavLink>
            <p className="text-sm opacity-50">
              Full-stack development of web-based psychophysics experiments.
            </p>
          </div>
          <div>
            <NavLink to="/dabble" className="text-md">
              Dabble
            </NavLink>
            <p className="text-sm opacity-50">AI powered course recommender.</p>
          </div>
          <div>
            <NavLink to="/dfg" className="text-md">
              Develop for Good
            </NavLink>
            <p className="text-sm opacity-50">
              Data management design for Tanzanian Children's Fund.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
