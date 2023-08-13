import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Screenshot (493).png'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5> Hi. I'm PLUA</h5>
      <h5>but my friends call me</h5>
      <h1>Paul</h1>
      <h5 className='text-light'>Writer, Engineer, Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className='me'>
        <img src={ME} alt='me'/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header