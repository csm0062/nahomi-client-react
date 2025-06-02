import React from 'react';

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="w-full border-t mt-100 py-6 px-4 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <a href="mailto:seulalee@usc.edu">seulalee@usc.edu</a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=KIOz3UUAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 Seula's Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};
