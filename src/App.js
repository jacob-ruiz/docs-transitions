import React, { useState } from 'react';
import DocListItem from './components/DocListItem/DocListItem';
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

function LeftColumn({ isOpen, onToggle }) {
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
        <DocsIcon />
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
        <NewIcon />
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
          <button className="pillButton blueButton">
            <NewIcon />
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
          <DocListItem
            title="How to Start Creating your Brand ..."
            author="Jacob Ruiz"
            lastEdited="Just now"
            isActive
          />
          <DocListItem
            title="Your brand is more than grammar..."
            author="Jacob Ruiz"
            lastEdited="Just now"
          />
          <DocListItem
            title="10 Great Movies at the New York Fe..."
            author="Jacob Ruiz"
            lastEdited="Just now"
          />
          <DocListItem
            title="Brand and Values Exploration"
            author="Jacob Ruiz"
            lastEdited="Just now"
          />
          <DocListItem
            title="Demo Doc"
            author="Jacob Ruiz"
            lastEdited="Just now"
          />
        </div>
      </div>
      <div>{isOpen}</div>
    </div>
  );
}

function RightColumn() {
  return <div className="rightColumn">right column</div>;
}

function DocsIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="13" height="13" rx="2.5" stroke="black" />
      <path
        d="M0.5 8.5C0.785288 8.5 1.13162 8.5 1.49981 8.5C3.15666 8.5 4.48347 10.3115 6.04933 10.853C6.31723 10.9457 6.63145 11 7 11C7.36855 11 7.68277 10.9457 7.95067 10.853C9.51653 10.3115 10.8431 8.5 12.5 8.5H13"
        stroke="black"
      />
    </svg>
  );
}

function NewIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.02577 2.7002H3C1.89543 2.7002 1 3.59563 1 4.7002V13.815C1 14.9195 1.89543 15.815 3 15.815H12.1148C13.2193 15.815 14.1148 14.9195 14.1148 13.815V9.25758"
        stroke="#3C64FA"
      />
      <path
        d="M12.9361 1.70696L7.56884 7.07423C7.45927 7.1838 7.37666 7.31734 7.32753 7.46431L6.07186 11.2208L9.82834 9.96512C9.97531 9.91599 10.1088 9.83338 10.2184 9.72381L15.5857 4.35654C15.9762 3.96601 15.9762 3.33285 15.5857 2.94233L14.3503 1.70696C13.9598 1.31643 13.3266 1.31643 12.9361 1.70696Z"
        stroke="#3C64FA"
      />
      <path d="M8.02588 6.91553L10.3678 9.25745" stroke="#3C64FA" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
