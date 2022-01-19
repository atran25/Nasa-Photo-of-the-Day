import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-sm flex-col space-y-8 py-8">
        <button className="btn text-secondary animate-bounce">
          Grabbing data from Nasa Api...
        </button>
      </div>
    </div>
  );
};

export default Loading;
