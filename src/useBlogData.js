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

  const deleteBlog = (blogToDelete) => {
    const item = blogdata.findIndex(blog => blogToDelete.title === blog.title);
    let newBlogdata = blogdata;
    newBlogdata.splice(item, 1);
    setBlogData(newBlogdata);
  }

  const addBlog = (blogtitle, blogtext, blogauthor) => {
    const blog = {
      title: blogtitle,
      slug: blogtitle.trim().toLowerCase().split(' ').join('-'),
      content: blogtext,
      author: blogauthor,
    }
    let newblogdata = blogdata;
    newblogdata.push(blog);
    setBlogData(newblogdata);
  }
  const editBlog = (blogToEdit, titleEdited, textEdited ) => {
    const blogIndex =blogdata.findIndex(blog => blogToEdit.title === blog.title);
    let newBlogdata = [...blogdata];
    newBlogdata[blogIndex].title = titleEdited;
    newBlogdata[blogIndex].content = textEdited;
    let slugEdited = titleEdited.trim().toLowerCase().split(' ').join('-');
    newBlogdata[blogIndex].slug =slugEdited;
    setBlogData(newBlogdata);
    console.log(blogdata);
  }
  return {blogdata, setBlogData, deleteBlog, addBlog, editBlog};
}

export { useBlogData };