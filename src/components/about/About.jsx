import React from 'react'
import './About.css'
import ME from '../../assets/Circle_Headshot.png'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image!" />
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nulla, vitae porro libero nesciunt reiciendis non amet deserunt aut quasi reprehenderit eligendi magni minima explicabo hic laudantium quis ea est?</p>
          <a href="'#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
      
      </section>  )
}

export default about