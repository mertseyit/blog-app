import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import blogApi from "./apis/blogApi";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";

function App() {
  const API_URL = 'http://localhost:3001/posts'
  const [user, setUser] = useState('mert')
  const [blogs, setBlogs] = useState([])
  const [isAdded, setAddStatus] = useState(false)

  useEffect( () => {
    (async () => {
      const getObj = {
        metod:'GET',
        headers: {
          "Content-Type": "application/json",
        },
      }
      const data = await blogApi(API_URL,getObj)
      setBlogs(data)
    })()
  },[blogs])
  const handleDelete = async (id) => {
    const obj = {
      method:'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    }
    await blogApi(`${API_URL}/${id}`,obj)
    
  }

  const createBlog = async (body) => {
    const addObj = {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(body),
    }
    await blogApi(API_URL, addObj)
    setAddStatus(true)
  }

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes> 
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/about" element={<About user={user}/>}/>
        <Route path="/blogs" element={<Blogs isAdded={isAdded} blogs={blogs} setBlogs={setBlogs} setAddStatus={setAddStatus}/>}/>
        <Route path="/blogs/:id" element={<Blog blogs={blogs} handleDelete={handleDelete}/>}/>
        <Route path="/blog/add" element={<AddBlog createBlog={createBlog}/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
