import React from 'react'
import { BsGithub , BsLinkedin} from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = ({user}) => {
  return (
    <div className='text-center' style={{marginTop:'100px', width:'100%'}}>
      <h1 style={{marginTop:'30px'}}>Simple Blog App</h1>
      <h1 style={{marginTop:'30px'}}>Hi {user} ! Wellcome to my Blog Application</h1>
      <h3 style={{marginTop:'30px'}}>This application was built using react</h3>
      <h4 style={{marginTop:'30px'}}>Visit my social media aconts </h4>
      <div className='acounts'>
        <div className=''>
          <Link className='aconunts-links' target={'_blank'} to={'https://github.com/mertseyit'}><BsGithub/></Link>
        </div>
        <div className=''>
          <Link className='aconunts-links' target={'_blank'} to={'https://www.linkedin.com/in/seyit-y%C4%B1lmaz-456b44253/'}><BsLinkedin/></Link>
        </div>
        <div className=''>
          <Link className='aconunts-links' target={'_blank'} to={'https://www.instagram.com/seyitm.20/'}><FaInstagram/></Link>
        </div>
      </div>
    </div>
  )
}

export default About