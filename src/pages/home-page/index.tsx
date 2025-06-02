import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <img
        alt="Soomin Lee"
        src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=KIOz3UUAAAAJ&citpid=2"
        srcSet="
          https://scholar.googleusercontent.com/citations?view_op=view_photo&user=KIOz3UUAAAAJ&citpid=2 100w,
          https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=KIOz3UUAAAAJ&citpid=2 200w
        "
        sizes="(max-width: 230px) 62px, 230px"
        className="w-50 h-50 rounded-full object-cover shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold">Seula Lee</h1>
      <p className="text-gray-700 mt-4 max-w-2xl">
        PhD Candidate, Sol Price School of Public Policy,{' '}
        <a
          href="https://scholar.google.com/citations?view_op=view_org&hl=en&org=2347757669226619985"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          University of Southern California
        </a>
      </p>
    </div>
  );
};
