import React from 'react';
import { Routing } from '@/pages';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routing />
      <Footer />
    </React.Fragment>
  );
};
