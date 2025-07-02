import React from 'react';

const SummaryCard = ({ title, count, color }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-3">
      <div className={`card border-${color} shadow-sm`}>
        <div className={`card-body text-${color}`}>
          <h5 className="card-title">{title}</h5>
          <h3>{count}</h3>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
