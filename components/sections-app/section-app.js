import React from 'react';

import TodoLIst from '../todo-list';
import FooterApp from '../footer-app';

import './style.css';

const SectionApp = () => {
  return (
    <section className="section-app">
      <TodoLIst />
      <FooterApp />
    </section>
  );
};

export default SectionApp;
