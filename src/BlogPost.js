import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
import { useBlogData } from './useBlogData';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();
  const { blogdata, deleteBlog, setBlogData } = useBlogData();
  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = (auth.user?.role=== 'admin' || blogpost.author === auth.user?.username);

  const canEdit = (blogpost.author === auth.user?.username);

  const returnToBlog = () => {
    navigate('/blog');
  }

  const DeleteBlog = () => {
    console.log('eliminar post');
    console.log({blogpost});
    deleteBlog(blogpost);
    navigate('/');
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && (
        <button onClick={DeleteBlog}>Eliminar blogpost</button>
      )}
      {canEdit && (
        <button>Editar blogpost</button>
      )}
    </>
  );
}


export { BlogPost };