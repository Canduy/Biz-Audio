import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import PdfContent from "../../components/PDF/PdfContent";
import PdfTitle from "../../components/PDF/PdfTitle";
import PdfTool from "../../components/PDF/PdfTool";
import "./Pdf.scss";

export default function PDF() {
  const [fullScreenStatus, setFullScreenStatus] = useState(false);

  return (
    <div className="pdf-bg">
      <div
        className={
          fullScreenStatus ? "pdf-container__fullscreen" : "pdf-container"
        }
      >
        <PdfContent
          fullScreenStatus={fullScreenStatus}
          setFullScreenStatus={setFullScreenStatus}
        />
        {/* <PdfTool
          setShowTabContent={setShowTabContent}
          showTabContent={showTabContent}
          showBookList={showBookList}
          setshowBookList={setshowBookList}
        /> */}
      </div>
    </div>
  );
}
