import React from 'react';

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="w-full border-t mt-10 py-6 px-4 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <a href="mailto:soomin@university.edu">soomin@university.edu</a>
            <a
              href="https://github.com/soomin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com"
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
