import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Jawad", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Welcome to Home!",
      body: "lorem ipsum...",
      author: "Jawad",
      id: 4,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };


  const [name,setName]=useState('Ishan');
  //Fire in every render
useEffect(()=>{
 
},[name]);
//addign the dependencies 
//the function will execute when the state of name changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author == "Jawad")}  title="Jawad's Blogs" />
      <button onClick={()=>setName('Jawad')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
