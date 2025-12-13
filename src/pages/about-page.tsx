import "./about.css";

function About() {
  return (
    <>
      <div>
        <h1 className="text-xl pb-5">Hello, I'm Indiamei.</h1>
        <div className="flex flex-col gap-3 pb-5 opacity-70">
          <p>
            I am currently a graduate student in Georgia Tech’s Online Master’s
            program. I previously completed my Bachelor’s in computer science at
            Brown University. My areas of interest include computing systems,
            cybersecurity, and UI/UX.
          </p>
          <p>
            I also love art, music, video games, and staying active. I play
            classical piano, draw, paint, and rock climb in my free time. Some
            games I enjoy include Hollow Knight, Minecraft, Terraria, League of
            Legends, and more.
          </p>

          <p>
            I am currently based in Seattle, Washington, though I grew up in
            Cranston, Rhode Island. I have also lived in New York City and San
            Diego for some time.
          </p>
          {/* <p>
            This website serves as an online place for me to collect a record of
            my experience and interests over the years.
          </p> */}
          <p>I created this website using Tailwind, Vite, and React.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1ZROOwJjAEkRqmTxM6YbUHs4BT1CdUQQ-/view?usp=drive_link"
          className="text-sm underline decoration-[#006DAA]"
        >
          resume
        </a>
      </div>
    </>
  );
}

export default About;
