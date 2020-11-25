import React, { useState } from 'react';
import './styles.css';
import Icons from '../../icons';
import DocListItem from '../DocListItem/DocListItem';
import Search from '../Search/Search';
import { initialList } from './dummyData';
import ReactTooltip from 'react-tooltip';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const DURATION = '80ms';
// easeOutCirc (easings.net)
const CURVE = 'cubic-bezier(0, 0.55, 0.45, 1)';

function LeftColumn({
  isOpen,
  onToggle,
  items,
  activeItem,
  onAddItem,
  setItems,
}) {
  return (
    <div
      className={`leftColumn ${!isOpen && `closed`}`}
      style={{
        transition: `transform ${DURATION} ${CURVE}`,
      }}
    >
      <button
        data-tip={isOpen ? 'Hide Docs' : 'Show Docs'}
        className="roundButton greyButton"
        onClick={onToggle}
        style={{
          position: 'absolute',
          right: -16,
          top: 20,
          zIndex: 100,
          padding: 0,
          display: 'grid',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <ReactTooltip
          className="tooltip"
          place="right"
          type="dark"
          effect="solid"
          backgroundColor="black"
          multiline={false}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            gap: 2,
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              display: 'grid',
              alignItems: 'center',
              opacity: isOpen ? 1 : 0,
              transition: `opacity ${DURATION}`,
            }}
          >
            <Icons.TriangleLeft />
          </span>
          <Icons.Doc />
          <span
            style={{
              display: 'grid',
              alignItems: 'center',
              opacity: isOpen ? 0 : 1,
              transition: `opacity ${DURATION}`,
            }}
          >
            <Icons.TriangleRight />
          </span>
        </div>
      </button>
      <button
        data-tip={'New Doc'}
        className="roundButton blueButton"
        style={{
          display: isOpen && 'none',
          position: 'absolute',
          right: -16,
          top: 60,
          zIndex: 100,
          opacity: isOpen ? 0 : 1,
          transition: `opacity ${DURATION}`,
        }}
      >
        <Icons.NewDoc />
      </button>

      <div
        className={`leftColumnContent`}
        style={{
          opacity: isOpen ? 1 : 0,
          transition: `opacity ${DURATION}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            gridTemplateColumns: 'auto auto',
            padding: '0 12px',
            margin: '20px 0 16px 0',
            minWidth: 299,
          }}
        >
          <h3 style={{ display: 'inline', marginRight: '8px' }}>Docs</h3>
          <button className="pillButton blueButton" onClick={onAddItem}>
            <Icons.NewDoc />
            New
          </button>
        </div>
        <div
          style={{
            marginBottom: '20px',
          }}
        >
          <Search />
        </div>
        <div
          style={{
            padding: '0 12px',
          }}
        >
          <div
            className="filterTitle"
            style={{
              marginBottom: 10,
            }}
          >
            My Docs
          </div>
          <div>
            <TransitionGroup>
              {items.map((item) => (
                <CSSTransition
                  key={item.id}
                  classNames="docListItem--container"
                  timeout={100}
                >
                  <DocListItem item={item} isActive={activeItem === item.id} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
      <div>{isOpen}</div>
    </div>
  );
}

export default LeftColumn;
