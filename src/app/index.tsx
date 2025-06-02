import React from 'react';
import { Routing } from '@/pages';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const App = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col flex-grow">
          <Routing />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
