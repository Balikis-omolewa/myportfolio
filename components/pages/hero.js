import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hello">Hello I'm</span>
        <h1>
          Balikis Omolewa <br />
          <span>Professional Web Developer</span>
        </h1>
        <p>
          I can help elevate your online presence and bring your ideas to life with <br />
          seamless, stunning, <span>and user-centric web solutions.</span>
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
          <a href="#" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
          <a href="#" aria-label="GitHub"><i className='bx bxl-github'></i></a>
          <a href="#" aria-label="Git Branch"><i className='bx bx-git-branch'></i></a>
        </div>
        <button className="btn"><a href="https://wa.link/nsq1ll">Let's Connect</a></button>
      </div>
      {isMounted && (
        <div className="hero-img">
          <Image
            src="/img/hr-bg.png"
            alt="hero"
            width={450}
            height={450}
            className='img-fluid'
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
