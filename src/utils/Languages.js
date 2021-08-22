import React from 'react';

const Languages = (props) => {
  return (
    <div className="languages">
      {props.children}
      <p className="languages__name">{props.title}</p>
    </div>
  );
};

export default Languages;
