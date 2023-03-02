import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EachBlog from '../components/EachBlog'

const Blogs = ({setAddStatus,isAdded,blogs, setBlogs}) => {
  const notify = (text) => toast.success(text, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  })
  useEffect(() => {
    if(isAdded) {
      notify('Blog added')
      setAddStatus(false)
    }
  },[isAdded,setAddStatus])
  return (
    <div style={{marginBottom:'100px'}}>
      {
        blogs.length !== 0 ? (blogs.map((blog) => {
          return(
            <div key={blog.id}>
              <Link key={blog.id} to={`/blogs/${blog.id}`}>
                <EachBlog blog={blog} setBlogs={setBlogs}/>
              </Link>
              <ToastContainer/>
            </div>
          )
        })) : <h2 className='text-center' style={{marginTop:'40px '}}>
          No blogs uploaded yet. Go to the homepage and be the first to upload !
        </h2>
      }
    </div>
  )
}

export default Blogs