import React from 'react';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">Same</a>
        <div className="metadata"><span className="data">Today at 6:00 pm</span></div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};