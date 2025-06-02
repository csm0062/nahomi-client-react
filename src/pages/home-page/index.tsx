import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 mt-20">About</h1>
        <img
          alt="Soomin Lee"
          src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=KIOz3UUAAAAJ&citpid=2"
          srcSet="
          https://scholar.googleusercontent.com/citations?view_op=view_photo&user=KIOz3UUAAAAJ&citpid=2 100w,
          https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=KIOz3UUAAAAJ&citpid=2 200w
        "
          sizes="(max-width: 230px) 62px, 230px"
          className="w-50 h-50 rounded-2xl object-cover shadow-md mb-6"
        />

        <p className="text-gray-700 mt-4 max-w-2xl">
          PhD Candidate, Sol Price School of Public Policy,{' '}
          <a
            href="https://scholar.google.com/citations?view_op=view_org&hl=en&org=2347757669226619985"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            University of Southern California
          </a>
        </p>
      </section>
      <section className="flex gap-2 items-center justify-center mt-2">
        <a
          href="https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=label:travel_behavior"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          travel behavior
        </a>
        <a
          href="https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=label:transportation_planning"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          transportation planning
        </a>
        <a
          href="https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=label:mobility"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          mobility
        </a>
        <a
          href="https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=label:micro_mobility"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          micro mobility
        </a>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">...</h2>
        <p className="text-gray-700 mt-4 max-w-2xl">
          I am a PhD candidate in the Sol Price School of Public Policy at the
          University of Southern California. My research focuses on the
          intersection of transportation and public policy.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">contact</h2>
        <p className="text-gray-700 mt-4 max-w-2xl">
          Email:{' '}
          <a href="mailto:seulalee@usc.edu" className="underline">
            seulalee@usc.edu
          </a>
          <br />
          Google Scholar:{' '}
          <a
            href="https://scholar.google.com/citations?user=KIOz3UUAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Seula Lee
          </a>
          <br />
          LinkedIn:{' '}
          <a
            // href="https://www.linkedin.com/in/seulalee/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Seula Lee
          </a>
        </p>
      </section>
    </main>
  );
};
