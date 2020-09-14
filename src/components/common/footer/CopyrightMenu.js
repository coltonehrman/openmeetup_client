import React from 'react';

const CopyrightMenu = () => {
  const links = [
    {
      path: '#',
      title: 'Terms & Conditions'
    },
    {
      path: '#',
      title: 'Privacy Policy'
    },
    {
      path: '#',
      title: 'Help Center'
    }
  ];

  return (
    <ul className="list-items">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default CopyrightMenu;