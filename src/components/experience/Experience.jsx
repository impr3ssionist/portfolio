import React from 'react'
import './Experience.css'
import {BsCheck2All } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
             <div> <h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
              <div><h4>React</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            
          </div>
        </div>

        {/* ************** End of Frontend ******************** */}
        
        <div className="experience__backend">
                    <h3>Backend</h3>
                      <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
              <div><h4>Node.js</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsCheck2All className='experience__details-icon'/>
              <div><h4>postgreSQL</h4>
              <small className='text-light'>Familiar</small></div>
            </article>

           

        </div>

      </div>
    </section>
  )
}

export default Experience