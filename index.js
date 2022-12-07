import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

import HeaderApp from './components/header-app';
import SectionApp from './components/sections-app';

const App = () => {
  return (
    <div>
      <HeaderApp />
      <SectionApp />
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
