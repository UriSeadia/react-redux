import React from 'react';

type TCommentDetail = {
  author: string;
  time: string;
  content: any;
  avatar: any;
}

const CommentDetail = ({ author, time, content, avatar }: TCommentDetail) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">{author}</a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
