import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// workerSrc는 컴포넌트 밖에서 전역설정!
pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs';

export const CvPage: React.FC = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<Error | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setError(null); // 성공시 에러 초기화
  }

  function changePage(offset: number) {
    setPageNumber((prev) => Math.min(Math.max(prev + offset, 1), numPages));
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Curriculum Vitae</h2>

      <div
        className="border rounded shadow mb-6"
        style={{ height: '800px', width: '100%' }}
      >
        <Document
          file="/seulalee-cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => setError(error)}
          // options는 필요하면 여기 넣기 (ex. withCredentials: true)
        >
          {error ? (
            <div className="p-4 text-red-600">
              PDF 로드 에러: {error.message}
            </div>
          ) : (
            <Page pageNumber={pageNumber} />
          )}
        </Document>
      </div>

      <div className="text-center mb-4">
        <button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          className="px-3 py-1 mr-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => changePage(1)}
          disabled={pageNumber >= numPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
        <p className="mt-2">
          Page {pageNumber} of {numPages}
        </p>
      </div>

      <div className="text-center">
        <a
          href="/seulalee-cv.pdf"
          download="seulalee-cv.pdf"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
};
