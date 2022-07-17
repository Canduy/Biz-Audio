import {
  CodiconIcon,
  FullScreenIcon,
  GridIcon,
  PlayIcon,
  ShareIcon,
  SingleIcon,
  TableIcon,
} from "../Icon";
import "./index.scss";
export default function PdfTool({
  showTabContent,
  setShowTabContent,
  showBookList,
  setshowBookList,
}) {
  const handleShowTab = () => {
    setShowTabContent(!showTabContent);
    setshowBookList(false);
  };
  const handleShowBook = () => {
    setshowBookList(!showBookList);
    setShowTabContent(false);
  };
  return (
    <div className="pdf-tool__container">
      <div className="pdf-tool">
        <div className="tool-icon">
          <PlayIcon width="24" height="24" />
        </div>
        <div className="tool-icon">
          <CodiconIcon />
          <div></div>
        </div>
        <div className="tool-icon">
          <SingleIcon />
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
        <div className="tool-icon">
          <FullScreenIcon />
        </div>
      </div>
    </div>
  );
}
