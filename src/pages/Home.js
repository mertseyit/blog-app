import React from 'react'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'

import '../index.css'

const Home = ({user}) => {
  
  return (
    <div className='home h-8'> 
      <div>
        <h2 className='text-center' style={{marginBottom:'20px'}}>Wellcome <span className='user-name'>{user}</span></h2>
        <h4 className='text-center'>Start reading another user's blogs</h4>
        <div className='text-center'>
          <Link className='add-blog-btn' to={'/blog/add'}><BsPlusLg /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home