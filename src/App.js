import React, { useState } from 'react';
import DocListItem from './components/DocListItem/DocListItem';
import LeftColumn from './components/LeftColumn/LeftColumn';
import Search from './components/Search/Search';
import './styles.css';

const leftPanelWidths = {
  open: 300,
  closed: 84,
};

const DURATION = '80ms';
const CURVE = 'cubic-bezier(0, 0.55, 0.45, 1)'; // easeOutCirc (easings.net)

function Layout() {
  const [leftPanel, setLeftPanel] = useState(true);
  const toggleLeftPanel = () => setLeftPanel(!leftPanel);

  const [rightPanel, setRightPanel] = useState(false);
  const toggleRightPanel = () => setRightPanel(!rightPanel);

  return (
    <div className="page">
      <LeftColumn isOpen={leftPanel} onToggle={toggleLeftPanel} />
      <CenterColumn leftPanel={leftPanel} />
    </div>
  );
}

function CenterColumn({ leftPanel }) {
  return (
    <div
      className="centerColumn"
      style={{
        marginLeft: leftPanel ? leftPanelWidths.open : leftPanelWidths.closed,
        transition: `margin ${DURATION} ${CURVE}`,
      }}
    ></div>
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
