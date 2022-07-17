import React from 'react';

interface NavItem {
  subheading: String;
}

interface Props {
  heading: String;
  items: NavItem[];
}

export const CardNav: React.FC<Props> = ({ children, heading, items }) => {
  return (
    <div>
      {/* main nav */}
      <h6>{heading}</h6>
      <h1>Test</h1>
      <div>
        {items.map((items) => (
          <div></div>
        ))}
      </div>
      {/*  sub nav */}
      <div></div>
    </div>
  );
};
