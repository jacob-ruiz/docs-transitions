import React, { useEffect, useState } from 'react';
import './styles.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const DocListItem = ({ title, author, lastEdited, isActive }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    console.log('mounted!');
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <TransitionGroup component={null}>
      {isVisible && (
        <CSSTransition classNames="docListItem--container" timeout={100}>
          <div className="docListItem">
            <div
              className={`docListItem--container ${
                isActive && `docListItem--active`
              }`}
            >
              <div className="docListItem--title">{title}</div>
              <span className="docListItem--subtitle">
                {author} {` • `} {lastEdited}
              </span>
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default DocListItem;
