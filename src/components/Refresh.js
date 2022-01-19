import React from 'react';

const Refresh = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button onClick={() => onClick()} className="btn btn-secondary shadow-xl">
        New Images
      </button>
    </div>
  );
};

export default Refresh;
