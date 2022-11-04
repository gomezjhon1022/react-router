import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import { useBlogData } from './useBlogData';
import './BlogAdd.css';

function BlogAdd() {
  const auth = useAuth();
  let textblog = '';
  let titleblog = '';
  const navigate = useNavigate();
  const { addBlog } = useBlogData();

  const post = (e) => {
    e.preventDefault();
    let authorblog = auth.user.username;
    addBlog(titleblog, textblog, authorblog);
    navigate('/blog');

  };
  const onChangeText = (event) => {
    event.preventDefault();
    textblog = event.target.value;
  }
  const onChangeTitle = (event) => {
    event.preventDefault();
    titleblog = event.target.value;
  }
 
  // if (!auth.user) {
  //   return <Navigate to='/profile' />
  // }

  return (
    <>
      <h1>Añadir nuevo blog</h1>

      <form onSubmit={post}>

        <label htmlFor='newPost__title'>Escribe el título del blog</label>
        <input
        onChange={onChangeTitle}
        id='newPost__title'/>
        <textarea
                onChange={onChangeText}
                placeholder="Escribe aquí el cuerpo de tu blog"
            />
        <button type='submit'>Publicar</button>
      </form>
    </>
  );
}

export { BlogAdd };