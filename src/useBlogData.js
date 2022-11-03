import React from 'react';

let blogdatainitial = [];
blogdatainitial.push({
  title: '¿Qué es React?',
  slug: 'que-es-react',
  content: 'React es el mejor framework de JavaScript.',
  author: 'Jhon',
});
blogdatainitial.push({
  title: '¿Qué es Vue?',
  slug: 'que-es-vue',
  content: 'Vue es el mejor framework de JavaScript.',
  author: 'Natalia',
});
blogdatainitial.push({
  title: '¿Qué es Angular?',
  slug: 'que-es-angular',
  content: 'Angular es el mejor framework de JavaScript.',
  author: 'Lina',
});

function useBlogData() {
  let [blogdata, setBlogData] = React.useState(blogdatainitial);
  console.log('dentro de la funcion',blogdata);

  const deleteBlog = (blogToDelete) => {
    const item = blogdata.findIndex(blog => blogToDelete.title === blog.title);
    let newBlogdata = blogdata;
    newBlogdata.splice(item, 1);
    setBlogData(newBlogdata);
    console.log('despues de borrarlo',blogdata);
  }
  return {blogdata, setBlogData, deleteBlog};
}

export { useBlogData };