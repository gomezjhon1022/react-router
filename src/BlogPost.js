import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
import { useBlogData } from './useBlogData';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();
  const { blogdata, deleteBlog } = useBlogData();
  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = (auth.user?.role === 'admin' || blogpost.author === auth.user?.username);
  const canEdit = (blogpost.author === auth.user?.username);
  const canAdd = auth.user?.role === 'editor';

  const returnToBlog = () => {
    navigate('/blog');
  }

  const DeleteBlog = () => {
    deleteBlog(blogpost);
    navigate('/');
  }
  const addBlog = () => {
    navigate('/addpost');
  }

  return (
    <>
      <button onClick={returnToBlog}>Volver al blog</button>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && (
        <button onClick={DeleteBlog}>Eliminar blogpost</button>
      )}
      {canEdit && (
        <button>Editar blogpost</button>
      )}
      {canAdd && (
        <button onClick={addBlog}>Añadir blogpost</button>
      )}
    </>
  );
}


export { BlogPost };