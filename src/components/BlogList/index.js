import React from 'react';
import BlogItem from '../BlogItem';
import './blogList.scss';

const BlogList = () => {
  return (
    <section className="blog-list">
      <div className="main-container blog-list-wrapper">
          <BlogItem />
          <button className="blog-list-button">load more</button>
      </div>
    </section>
  );
}

export default BlogList;
