// components/About.tsx (or About.jsx)
const About = () => {
    return (
      <section id="about" style={{ gap: '2rem' }}>
        <div className="about-title">
          <h2>About Me</h2>
          <h2 className="span">
            Transforming Vision into Digital <br /> Reality is my Thing.
          </h2>
        </div>
        <div className="about">
          <div className="about-img">
            <img src="/img/ab-bg.png" alt="About" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              A Professional freelance Web Developer with proven experience in creating and maintaining codebase for reusability. Passionate about learning and development with a desire to apply
              skills to build and maintain functional, attractive, and responsive websites.
            </p>
            <button className="btn">
              <a href="/img/CV_Nasirudeen_Balikis_Omotunrayo.pdf" target="_blank" rel="noopener noreferrer">
                See Resume
              </a>
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  