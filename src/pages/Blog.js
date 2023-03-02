import React, {useState, useEffect} from 'react'
import blogApi from '../apis/blogApi'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import {BsChevronDoubleLeft, BsFillTrashFill} from 'react-icons/bs'

const Blog = ({handleDelete }) => {
  const API_URL = 'http://localhost:3001/posts'
  const navigate = useNavigate()
  const {id} = useParams()  
  const [blog,setBlog] = useState({})
  useEffect(() => {
    ( async() => {
      const getObj = {
        method:'GET',
        headers: {
          "Content-Type": "application/json",
        }
      }
      const blog = await blogApi(`${API_URL}/${id}`,getObj)
      if(blog) setBlog(blog)
    })()
  },[id])
  
  return (
    <div style={{padding:'20px', marginBottom:'30px'}}>
      {blog && (
          <div className='single-blog'>
            <h2>{blog.title}</h2>
            <p style={{textIndent:'50px', marginTop:"20px"}}>{blog.body}</p>
            <p style={{marginTop:'60px', fontStyle:'italic'}}>Writed by <span style={{color:'grey'}}>{blog.name + " " + blog.lastname}</span></p>
            <div style={{marginTop:'40px'}}>
              <Link to={'/blogs'} ><BsChevronDoubleLeft/></Link>
            </div>
            <button className='delete-btn'><BsFillTrashFill onClick={(e) => {
              e.preventDefault()
              handleDelete(id)
              navigate('/blogs')
              }} className='delete-icon'/></button>
          </div>
        )}
    </div>
  )
}

export default Blog