import React from 'react';
import './styles.css';

const DocListItem = ({ title, author, lastEdited, isActive }) => {
  return (
    <div
      className={`docListItem--container ${isActive && `docListItem--active`}`}
    >
      <div className="docListItem--title">{title}</div>
      <span className="docListItem--subtitle">
        {author} {` • `} {lastEdited}
      </span>
    </div>
  );
};

export default DocListItem;
