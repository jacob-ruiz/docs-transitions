import React, { useState } from 'react';
import './styles.css';

const leftPanelWidths = {
  open: 300,
  closed: 84,
};

const DURATION = '200ms';
const CURVE = 'ease-in-out';

function negative(number) {
  return number * -1;
}

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
    >
      leftPanel: {leftPanel}
    </div>
  );
}

function LeftColumn({ isOpen, onToggle }) {
  return (
    <div
      className="leftColumn"
      style={{
        width: isOpen ? leftPanelWidths.open : leftPanelWidths.closed,
        transition: `width ${DURATION} ${CURVE}`,
      }}
    >
      <button onClick={onToggle}>toggle panel</button>
      <div>{isOpen}</div>
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
