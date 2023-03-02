import React from 'react'
import { CiHeart } from 'react-icons/ci'

const EachBlog = ({blog,setBlogs}) => {
  return (
    <div className='each-blog'>
        <div>
          <h4 className='blog-title'>Blog {blog.id}</h4>
          <p className='blog-desc'>{blog.title}</p>
        </div>
        <div>
          <div className='likes'>
            <CiHeart  className='heart'/>
            <p className='text-center text-italic'>{blog.like}</p>
          </div>
        </div>
      </div>
  )
}

export default EachBlog