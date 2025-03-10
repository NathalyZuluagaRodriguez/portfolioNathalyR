import React from 'react';
import { NavLink } from "react-router-dom";
import './ItemNavbar.css';

export const ItemNavbar = ({ styles, href, contents, route }) => {
  return (
    <li>
      {href ? (
        <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
          {contents}
        </a>
      ) : (
        <NavLink className={styles} to={route}>
          {contents}
        </NavLink>
      )}
    </li>
  );
};
