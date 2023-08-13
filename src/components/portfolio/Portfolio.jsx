import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nazgul.jpg'
import IMG2 from '../../assets/portfolio_PLUA.png'
import IMG3 from '../../assets/WEATHER_PLUA.png'
import IMG4 from '../../assets/bukowsky.jpg'
import IMG5 from '../../assets/bukowsky.jpg'
import IMG6 from '../../assets/bukowsky.jpg'

const data = [
 {
  id: 1,
  image: IMG1,
  title: 'Motard',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/15609432-Biker?utm_source=Clipboard_Shot&utm_campaign=waldek&utm_content=Biker&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=waldek&utm_content=Biker&utm_medium=Social_Share'
 }, 
 {
  id: 2,
  image: IMG2,
  title: 'Portfolio Website',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/22149408-Dayat-Santoski-Website?utm_source=Clipboard_Shot&utm_campaign=tosangarditama&utm_content=Dayat%20Santoski%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tosangarditama&utm_content=Dayat%20Santoski%20Website&utm_medium=Social_Share'
 }, 
 {
  id: 3,
  image: IMG3,
  title: 'Weather App',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI?utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Weather%20Forecasting%20Web%20App%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Weather%20Forecasting%20Web%20App%20UI&utm_medium=Social_Share'
 }, 
 {
  id: 4,
  image: IMG4,
  title: '',
  github: 'https://github.com',
  demo: ''
 }, 
 {
  id: 5,
  image: IMG5,
  title: '',
  github: 'https://github.com',
  demo: ''
 }, 
 {
  id: 6,
  image: IMG6,
  title: '',
  github: 'https://github.com',
  demo: ''
 }, 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio