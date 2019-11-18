import React, { useState } from 'react';

const MyComponent = ({ strings, handleClick, isHidden }) => {
  return (
    <>
      <div>My Component for shallow testing </div>
      <div>String 1: {strings[0]}</div>
      {!isHidden && <div>String 2: {strings[1]}</div>}
      <button onClick={handleClick} id="my-button-one">
        click
      </button>
    </>
  );
};

const wrapper = () => {
  const [isHidden, setIsHidden] = useState(false);
  const strings = ['one', 'two'];
  const handleClick = () => {
    setIsHidden(true);
  };
  return (
    <MyComponent
      strings={strings}
      handleClick={handleClick}
      isHidden={isHidden}
    />
  );
};

export default MyComponent;
