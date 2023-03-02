import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const AddBlog = ({createBlog}) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/blogs')
        await createBlog({
            name,lastname,title,body,like:0
        })
    }
    return ( 
        <div className='blog-add'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div className='form-controll'>
                        <label htmlFor="name">Your Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} id='name' type="text" />
                    </div>
                    <div className='form-controll'>
                        <label htmlFor="lastname">Your Lastname</label>
                        <input value={lastname} onChange={(e) => setLastName(e.target.value)} id='lastname' type="text" />
                    </div>
                    <div className='form-controll'>
                        <label htmlFor="title">Blog Title</label>
                        <input value={title}  onChange={(e) => setTitle(e.target.value)} type="text" id='title' />
                    </div>
                    <div className='blog-input-body text-center'>
                        <label htmlFor="body">Write your blog here</label>
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} name="body" id="body" cols={'80'} rows={'5'}></textarea>
                    </div>
                    <div style={{marginTop:'40px'}} className='text-center'>
                        <button className='add-btn' type='submit'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBlog