// HeadingComp.js
import React from 'react';

const HeadingComp = ({ first, second }) => { // Destructuring props here
  return (
    <div>
      <h1 className="text-center sign-up-heading">
        {first}<br/>{second}
      </h1>
    </div>
  );
};

export default HeadingComp;
