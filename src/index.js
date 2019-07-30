import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={Faker.image.avatar()}
          author="Sam" 
          timeAgo="Today at 4:55PM" 
          content="Nice Blog Post!" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={Faker.image.avatar()}
          author="Alex" 
          timeAgo="Today at 2:00PM" 
          content="I like the subject" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={Faker.image.avatar()}
          author="Jane" 
          timeAgo="Yesterday at 5:00PM" 
          content="I like the writing" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));