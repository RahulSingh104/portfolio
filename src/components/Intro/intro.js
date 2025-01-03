// import React from 'react';
// import './intro.css' ;
// import bg from '../../assets/image.png';
// import btnImg from '../../assets/hireme.png';
// import {Link} from 'react-scroll';

// const Intro = () => {
//   return (
//     <section id= "intro">
//         <div className="introContent">
//          <span className="hello">Hello,</span>
//          <span className="introText">I'm<span className="introName"> Rahul</span><br/> FullStack Developer</span>
         
//          <p className="introPara">I am a skilled FullStack with <br/>Learnig and creating a projects</p>
//          <Link><button className="btn"><img src={btnImg} alt ="Hire Me" className='btnImg'/>Hire Me</button></Link>
//         </div>
//         <img src={bg} alt="Profile" className='bg'/>
       
//     </section>
//   );
// }

// export default Intro;
import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <h1 className="hello">Hello,</h1>
        <h2 className="introText">
          I'm <span className="introName">Rahul</span>
          <br /> FullStack Developer
        </h2>
        <p className="introPara">
          I am a skilled FullStack developer <br/>passionate about learning and <br/>creating impactful projects.
        </p>
        <Link to="contact" smooth duration={500} aria-label="Hire Me Section">
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile Background" className="bg" />
    </section>
  );
};

export default Intro;

