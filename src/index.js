import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          avatar={Faker.image.avatar()}
          author="Sam" 
          timeAgo="Today at 4:55PM" 
          content="Nice Blog Post!" />
      </ApprovalCard>
      <CommentDetail 
        avatar={Faker.image.avatar()}
        author="Alex" 
        timeAgo="Today at 2:00PM" 
        content="I like the subject" />
      <CommentDetail 
        avatar={Faker.image.avatar()}
        author="Jane" 
        timeAgo="Yesterday at 5:00PM" 
        content="I like the writing" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));