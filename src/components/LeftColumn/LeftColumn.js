import React, { useState } from 'react';
import './styles.css';
import Icons from '../../icons';
import DocListItem from '../DocListItem/DocListItem';
import Search from '../Search/Search';
import { initialList } from './dummyData';

const DURATION = '80ms';
// easeOutCirc (easings.net)
const CURVE = 'cubic-bezier(0, 0.55, 0.45, 1)';

function LeftColumn({ isOpen, onToggle }) {
  const [items, setItems] = useState(initialList);
  const [activeItem, setActiveItem] = useState(1);

  function addItem() {
    const newItems = [...items];
    const newItemID = items.length + 1;
    newItems.unshift({
      id: items.length + 1,
      title: 'Untitled Doc',
      author: 'Jacob Ruiz',
      lastEdited: 'Just now',
    });
    setItems(newItems);
    setActiveItem(newItemID);
  }
  return (
    <div
      className={`leftColumn ${!isOpen && `closed`}`}
      style={{
        transition: `transform ${DURATION} ${CURVE}`,
      }}
    >
      <button
        className="roundButton greyButton"
        onClick={onToggle}
        style={{
          position: 'absolute',
          right: -16,
          top: 20,
          zIndex: 100,
        }}
      >
        <Icons.Doc />
      </button>
      <button
        className="roundButton blueButton"
        style={{
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
          <button className="pillButton blueButton" onClick={addItem}>
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
            {items.map((item) => (
              <DocListItem
                key={item.id}
                title={item.title}
                author={item.author}
                lastEdited={item.lastEdited}
                isActive={activeItem === item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div>{isOpen}</div>
    </div>
  );
}

export default LeftColumn;