import React from 'react';

type TApprovalCard = {
  approveText: string;
  rejectText: string;
  children?: any;
}

const ApprovalCard = ({ children, approveText, rejectText }: TApprovalCard) => {
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
