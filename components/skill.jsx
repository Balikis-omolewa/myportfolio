import styles from '../style/skills.module.css';
import { IoIosCheckmarkCircle } from "react-icons/io";


const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.title}>Skill & Experienced</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <div className={styles.icon}></div>
          <h3>Frontend Development</h3>
          <p>Build client-side web applications with modern technologies like:</p>
          <ul>
            <li>
             <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
             <span className='list'>CSS<span className={styles.experience} style={{fontWeight: "300"}}> <br /> Experienced</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">Bootstrap <span className={styles.experience} style={{fontWeight: "300"}}> <br />Experienced</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span>
               <span className="list">JavaScript  <span className={styles.experience} style={{fontWeight: "300"}}> <br />Intermediate</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
             <span className="list"> WordPress <span className={styles.experience}style={{fontWeight: "300"}} > <br /> Experienced</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">React <span className={styles.experience} style={{fontWeight: "300"}}> <br />Experienced</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">Next.Js <span className={styles.experience} style={{fontWeight: "300"}}> <br />Intermediate</span></span>
            </li>
          </ul>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.icon}></div>
          <h3>Backend Development</h3>
          <p>Build server-side web applications with modern technologies like:</p>
          <ul>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">PHP <span className={styles.experience} style={{fontWeight: "300"}}> <br />Experienced</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
             <span className="list"> MySQL <span className={styles.experience} style={{fontWeight: "300"}}><br />Experienced</span></span>
            </li>
          </ul>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.icon}></div>
          <h3>UI Design</h3>
          <p>Crafting seamless user experiences utilizing tools like:</p>
          <ul>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">Figma <span className={styles.experience} style={{fontWeight: "300"}}><br />Intermediate</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">Miro <span className={styles.experience} style={{fontWeight: "300"}}> <br />Intermediate</span></span>
            </li>
            <li>
              <span className={styles.iconCheck}><IoIosCheckmarkCircle /></span> 
              <span className="list">FigJam <span className={styles.experience} style={{fontWeight: "300"}}><br />Intermediate</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
