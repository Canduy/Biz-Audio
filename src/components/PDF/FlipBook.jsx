import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page } from "react-pdf";
const PageBook = React.forwardRef((props, ref) => {
  function onDocumentLoadSuccess({ numPages }) {}

  return (
    <div className="demoPage" ref={ref} data-density="hard">
      <Document
        file="https://file.mentor.vn/files/books/lesson/file-1636628304136.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={props.pageNumber} renderTextLayer={false} />
      </Document>
    </div>
  );
});
export default function FlipBook({ pageNumber, book }) {
  //   const pdfBook = useRef(null);
  return (
    <HTMLFlipBook
      width={900}
      height={1350}
      size="stretch"
      minWidth={480}
      maxWidth={1500}
      minHeight={400}
      maxHeight={2250}
      drawShadow={true}
      maxShadowOpacity={0}
      showCover={true}
      mobileScrollSupport={true}
      useMouseEvents={false}
      // flippingTime={800}
      usePortrait={true}
      className="book"
      ref={book}
    >
      {[...Array(5)].map((item, index) => (
        <PageBook key={index} pageNumber={pageNumber} />
      ))}
    </HTMLFlipBook>
  );
}
