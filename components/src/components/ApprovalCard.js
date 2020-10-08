import React from 'react';

const ApprovalCard = ({ children, approveText, rejectText }) => {
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">{approveText}</div>
          <div className="ui basic red button">{rejectText}</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
