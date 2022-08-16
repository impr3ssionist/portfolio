import React from 'react'
import './About.css'
import ME from '../../assets/Circle_Headshot.png'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know Caleb</h5>
      <h2>About Me</h2>

      <div className='about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>FullStack Academy Graduate</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            
       
          </div>
          <p>   I’m a web developer and educator living in one of oldest neighborhoods 
            in New Orleans. I spend my days building inspiring web applications, from 
            back end programming (postgreSQL, express.js, and Python) to front end 
            engineering (HTML, CSS, JavaScript, and React.js) with a focus on requirement analysis,
             design, and usability.
          </p>

            <p>I’m passionate about web development and data analysis in all its forms, and 
              solving problems for everyday consumers. Aside from web development, I enjoy spending 
              my time with my partner and friends, camping, and watching sports (Who Dat?!).
            </p>
            <div className="about__button">
          <a href="'#Contact" className="btn btn-primary">Let's Talk</a></div>
        </div>
      </div>
      
      </section>  )
}

export default about