import React from 'react';

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div>
      <h3>Loading...</h3>
      {/* Add your loading spinner or indicator here */}
    </div>
  );
};

export default Loading;
