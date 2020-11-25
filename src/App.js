import React, { useState } from 'react';
import DocListItem from './components/DocListItem/DocListItem';
import LeftColumn from './components/LeftColumn/LeftColumn';
import Search from './components/Search/Search';
import { initialList } from './components/LeftColumn/dummyData';
import './styles.css';

const leftPanelWidths = {
  open: 300,
  closed: 84,
};

const DURATION = '80ms';
const CURVE = 'cubic-bezier(0, 0.55, 0.45, 1)'; // easeOutCirc (easings.net)

function Layout() {
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
      deleted: false,
    });
    setItems(newItems);
    setActiveItem(newItemID);
  }

  function deleteItem(id) {
    console.log(id);
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.deleted = true;
        return item;
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  const [leftPanel, setLeftPanel] = useState(true);
  const toggleLeftPanel = () => setLeftPanel(!leftPanel);

  const [rightPanel, setRightPanel] = useState(false);
  const toggleRightPanel = () => setRightPanel(!rightPanel);

  return (
    <div className="page">
      <LeftColumn
        isOpen={leftPanel}
        onToggle={toggleLeftPanel}
        onAddItem={addItem}
        items={items}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <CenterColumn
        leftPanel={leftPanel}
        activeItem={activeItem}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

function CenterColumn({ leftPanel, onDeleteItem, activeItem }) {
  return (
    <div
      className="centerColumn"
      style={{
        marginLeft: leftPanel ? leftPanelWidths.open : leftPanelWidths.closed,
        transition: `margin ${DURATION} ${CURVE}`,
      }}
    >
      <button onClick={() => onDeleteItem(activeItem)}>Delete Doc</button>
    </div>
  );
}

function RightColumn() {
  return <div className="rightColumn">right column</div>;
}

export default function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
