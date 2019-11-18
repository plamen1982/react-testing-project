import React from 'react';

const Items = ({ items = [] }) => {
  if (items.length === 0) {
    return <span className="empty-message">No items in the list</span>;
  }
  if (items.length === 1) {
    return <span className="empty-message">One item: {items[0]}</span>;
  }

  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Items;
