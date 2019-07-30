import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));