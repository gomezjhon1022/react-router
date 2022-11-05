import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import { useBlogData } from './useBlogData';


function BlogEdit() {
  const navigate = useNavigate();
  const {slug} = useParams();

  // const auth = useAuth();
  const { blogdata , editBlog } = useBlogData();
  const blogpost = blogdata.find(post => post.slug === slug);

  const [titleblog, setTitleBlog ] = React.useState(blogpost.title);
  const [textblog, setTextBlog] = React.useState(blogpost.content);

  const edit = (e) => {
  e.preventDefault();
  editBlog(blogpost,titleblog, textblog);
  navigate('/');
  };

  const onChangeText = (event) => {
    event.preventDefault();
    setTextBlog(event.target.value);
  }
  const onChangeTitle = (event) => {
    event.preventDefault();
    setTitleBlog(event.target.value);
  }

  return (
    <>
      <h1>Editar blog</h1>
      <form onSubmit={edit}>
        <label htmlFor='newPost__title'>Edita el título del blog</label>
        <input
        value={titleblog}
        onChange={onChangeTitle}
        id='newPost__title'/>
        <textarea
                value={textblog}
                onChange={onChangeText}
            />
        <button type='submit'>Editar</button>
      </form>
    </>
  )
}

export { BlogEdit };