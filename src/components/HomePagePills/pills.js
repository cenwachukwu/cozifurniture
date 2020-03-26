import React from 'react';
import './pills.scss';

const Pills = (props) => {
  console.log(props.props);
  return (
    <div className="Pills">
      <img src={props.props} />
    </div>
  );
};

export default Pills;
