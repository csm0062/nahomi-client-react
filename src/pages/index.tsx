import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home-page';
import { CvPage } from './cv-page';
import { ResearchPage } from './research-page';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/research" element={<ResearchPage />} />
    </Routes>
  );
};
