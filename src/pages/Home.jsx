import React from 'react';

function Home() {
  const buttonTest = () => {
    alert('Ohayo');
  };
  
  return (
    <button onClick={buttonTest}>
      Create survey
    </button>
  );
}

export default Home;
