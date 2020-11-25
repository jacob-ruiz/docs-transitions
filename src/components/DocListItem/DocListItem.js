import React, { useEffect, useState } from 'react';
import './styles.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const DocListItem = ({ item, isActive }) => {
  return (
    <div className="docListItem">
      <div
        className={`docListItem--container ${
          isActive && `docListItem--active`
        }`}
      >
        <div className="docListItem--title">{item.title}</div>
        <span className="docListItem--subtitle">
          {item.author} {` • `} {item.lastEdited}
        </span>
      </div>
    </div>
  );
};

export default DocListItem;
