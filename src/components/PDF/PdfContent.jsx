import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import HTMLFlipBook from "react-pageflip";
import {
  CheckIcon,
  CodiconIcon,
  DoubelPageIcon,
  ExceptIcon,
  FullScreenIcon,
  GridIcon,
  LeftIcon,
  LockIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  PrevIcon,
  ShareIcon,
  SingleIcon,
  TableIcon,
} from "../Icon";
import "./index.scss";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
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
export default function PdfContent({ fullScreenStatus, setFullScreenStatus }) {
  // const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showTabContent, setShowTabContent] = useState(false);
  const [showBookList, setshowBookList] = useState(false);
  const [pdfToolStatus, setPdfToolStatus] = useState(false);

  const [autoFlipStatus, setAutoFlipStatus] = useState(false);
  const [speadStatus, setSpeadStatus] = useState(false);
  const [timeToFlipPage, setTimeToFlipPage] = useState(30);
  const [timer, setTimer] = useState("30s");
  const [pageSingle, setPageSingle] = useState(false);

  const handleShowTab = () => {
    setShowTabContent(!showTabContent);
    setshowBookList(false);
  };
  const handleShowBook = () => {
    setshowBookList(!showBookList);
    setShowTabContent(false);
  };

  const book = useRef(null);
  const pdfBook = useRef(null);

  const handleNext = () => {
    book.current.pageFlip().flipNext();
    setPageNumber(pageNumber + 1);
  };

  const handleFullScreen = () => {
    setFullScreenStatus(!fullScreenStatus);
  };

  const handlePdfTool = () => {
    setPdfToolStatus(!pdfToolStatus);
  };

  const handlePlipAuto = () => {
    setAutoFlipStatus(!autoFlipStatus);
  };
  // auto
  useEffect(() => {
    let interval;
    if (autoFlipStatus) {
      if (pageNumber === 1) {
        handleNext();
      } else {
        interval = setInterval(() => {
          handleNext();
        }, timeToFlipPage * 1000);
      }

      if (pageNumber >= 5) {
        clearInterval(interval);
      }
    } else {
      // setTimeToFlipPage(timer);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [autoFlipStatus, pageNumber, timeToFlipPage]);

  // ====
  const handleSpead = () => {
    setSpeadStatus(!speadStatus);
  };

  const changeTimer = (paramTimer) => {
    if (paramTimer === "30s") {
      setTimeToFlipPage(30);
    } else if (paramTimer === "1m") {
      setTimeToFlipPage(60);
    } else if (paramTimer === "2m") {
      setTimeToFlipPage(120);
    } else if (paramTimer === "5m") {
      setTimeToFlipPage(300);
    } else {
      setTimeToFlipPage(600);
    }
    setTimer(paramTimer);
  };

  const handlePage = () => {
    setPageSingle(!pageSingle);
  };
  return (
    <>
      <div
        className={
          fullScreenStatus ? "pdf-title__none" : "pdf-container__title"
        }
      >
        <button className="pdf-btn-back">
          <LeftIcon width="40" height="40" />
        </button>
        <div className="pdf-title">
          <h2>
            Đế chế Alibaba: Bí mật quản trị nhân lực để tạo ra một đội quân bách
            chiến bách thắng
          </h2>
        </div>
        <div className="btn-audio">
          <FontAwesomeIcon icon={faCirclePlay} className="btn-audio__icon" />
          <button>Nghe audio</button>
        </div>
      </div>
      <div className={fullScreenStatus ? "pdf-content__full" : "pdf-content"}>
        <div className="pdf-content__pageNumber">
          <span>
            {pageNumber}/{5}
          </span>
        </div>
        {pageNumber > 1 && (
          <button
            className="controls-prev"
            onClick={() => {
              book.current.pageFlip().flipPrev();
              setPageNumber(pageNumber - 1);
            }}
          >
            <PrevIcon />
          </button>
        )}
        <div className="pdf-book" ref={pdfBook}>
          <TransformWrapper
            doubleClick={{ disabled: true }}
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
          >
            {({ zoomIn, zoomOut }) => (
              <>
                {/* <div className="icon-test"> */}
                <div
                  className={
                    pdfToolStatus ? "pdf-tool__full" : "pdf-tool__container"
                  }
                >
                  {fullScreenStatus && (
                    <div
                      className={pdfToolStatus ? "pdf-up" : "pdf-down"}
                      onClick={handlePdfTool}
                    >
                      <NextIcon />
                    </div>
                  )}
                  <div className="pdf-tool">
                    <div className="tool-icon" onClick={() => zoomIn()}>
                      <PlusIcon width="24" height="24" />
                    </div>
                    <div className="tool-icon" onClick={() => zoomOut()}>
                      <ExceptIcon width="24" height="24" />
                    </div>
                    <div className="tool-icon" onClick={handlePlipAuto}>
                      {autoFlipStatus ? (
                        <PauseIcon />
                      ) : (
                        <PlayIcon width="24" height="24" />
                      )}
                    </div>
                    <div className="tool-icon" onClick={handleSpead}>
                      <CodiconIcon className="svg-icon" />
                      <span className="tool-icon__timer">{timer}</span>
                      {speadStatus && (
                        <ul className="speed-read__list">
                          <li className="speed-read__title">Tự chuyển trang</li>
                          <li
                            className="speed-read"
                            onClick={() => changeTimer("10m")}
                          >
                            10 phút
                          </li>
                          <li
                            className="speed-read"
                            onClick={() => changeTimer("5m")}
                          >
                            5 phút
                          </li>
                          <li
                            className="speed-read"
                            onClick={() => changeTimer("2m")}
                          >
                            2 phút
                          </li>
                          <li
                            className="speed-read"
                            onClick={() => changeTimer("1m")}
                          >
                            1 phút
                          </li>
                          <li
                            className="speed-read"
                            onClick={() => changeTimer("30s")}
                          >
                            30s
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="tool-icon" onClick={handlePage}>
                      {pageSingle ? <DoubelPageIcon /> : <SingleIcon />}
                    </div>
                    <div className="tool-icon" onClick={handleShowTab}>
                      <GridIcon />
                    </div>
                    <div className="tool-icon" onClick={handleShowBook}>
                      <TableIcon />
                    </div>
                    <div className="tool-icon">
                      <ShareIcon />
                    </div>
                    <div className="tool-icon" onClick={handleFullScreen}>
                      <FullScreenIcon />
                    </div>
                  </div>
                </div>

                {/* </div> */}
                <TransformComponent>
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
                      <PageBook key={index} pageNumber={index + 1} />
                    ))}
                  </HTMLFlipBook>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>

        {pageNumber < 5 && (
          <button className="controls-next" onClick={handleNext}>
            <NextIcon />
          </button>
        )}
        <ul className={showTabContent ? "tab-content active" : "tab-content"}>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
          <li>06</li>
        </ul>
        <div className={showBookList ? "book-section active" : "book-section"}>
          <div className="chapter-title">Đế chế Alibaba</div>
          <div className="book-chapter__border-bottom"></div>
          <div className="chapter-list">
            <div className="lesson-title">
              <div className="lesson-icon">
                <CheckIcon />
              </div>
              <div className="lesson-content">
                <span>Mục lục</span>
              </div>
            </div>
            <div className="lesson-title active">
              <div className="lesson-icon">
                <CheckIcon />
              </div>
              <div className="lesson-content">
                <span>Lời nói đầu</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>
                  Phần 1: Quan niệm tư tưởng xây dựng nguồn nhân lực của Alibaba
                </span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 1: Văn hóa doanh nghiệp</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 2: Quy hoạch chiến lược</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 3: Chiêu mộ nhân tài</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 4: Đào tạo nhân viên mới</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 5: Tiêu chuẩn dùng người tài</span>
              </div>
            </div>
            <div className="lesson-title lock">
              <div className="lesson-icon">
                <LockIcon width="24" height="24" />
              </div>
              <div className="lesson-content">
                <span>Chương 6: Biện pháp khích lệ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
