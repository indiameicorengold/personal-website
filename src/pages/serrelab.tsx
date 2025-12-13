function SerreLab() {
  return (
    <>
      <div>
        <h2 className="text-lg pb-5">Serre Lab</h2>
        <div>
          <p className="opacity-50 text-sm mb-5">
            <i>ReactJS, Python, Docker, Google Cloud Platform, Git/GitHub</i>
          </p>
          {/* <p className="font-[Geologica] opacity-70 text-md pb-5 text-[#E5446D]"> */}
          <p className="font-[Geologica]">Overview</p>
          <p className="pb-5 opacity-60 text-md">
            I worked as a full-stack web development intern at the Serre
            Research Lab to create web-based psychophysics experiments.
          </p>
          <p className="font-[Geologica]">Background</p>
          <p className="opacity-60 text-md">
            The Serre Lab uses neuroscience research to improve artificial
            intelligence, particularly computer vision. My job as a web dev
            intern was to help design and develop two of the websites that they
            would use to collect their research data:{" "}
            <a href="https://rvis.clps.brown.edu" className="underline">
              Rapid Visual Categorization
            </a>{" "}
            and{" "}
            <a href="https://clickme.clps.brown.edu" className="underline">
              ClickMe.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SerreLab;
