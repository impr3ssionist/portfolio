import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [

  {
    id: 1,
    image: IMG1,
    title: "Craigslist Clone",
    github: "https://github.com/impr3ssionist/StrangersThings",
    demo: "https://cocky-lewin-4971a7.netlify.app/"

  },
   {
    id: 1,
    image: IMG2,
    title: "Wizard News",
    github: "https://github.com/impr3ssionist/WizardNews",
    demo: "https://glacial-brook-34382.herokuapp.com/"

  },
   {
    id: 1,
    image: IMG3,
    title: "Discount NFT Store",
    github: "https://github.com/impr3ssionist/GraceShopper",
    demo: "https://mutineers1.herokuapp.com/"

  }
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {

            return (
              
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>

            )
          })
        }

      </div>
    </section >
  )
}

export default Portfolio