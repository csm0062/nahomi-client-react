import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home-page';
import { CvPage } from './cv-page';
import { ResearchPage } from './research-page';
import { ProjectsPage } from './projects-page';
import { ArticlesPage } from './articles';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
    </Routes>
  );
};
