import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard approveText="Approve" rejectText="Reject">
        <CommentDetail
          author="Alex"
          time="Today at 6:00PM"
          content="Hi there!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard approveText="Approve" rejectText="Reject">
        <CommentDetail
          author="Jane"
          time="Today at 7:00PM"
          content="Hi! Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard approveText="Approve" rejectText="Reject">
        <CommentDetail
          author="Maya"
          time="Today at 8:00PM"
          content="Yes! Realy nice!!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
