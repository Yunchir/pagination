import { useState } from "react";
import { Link } from "react-router-dom";
import "./pagenation.css";
import PageBtn from "./sub-components/PageBtn";

const PageNumber = 4300;
export default function Pagenation() {
  [currentPage, setCurrentPage] = useState(10);
  return (
    <div>
      <Link
        to={`/page/${currentPage}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
      </Link>

      <span>
        <PageBtn btnName={currentPage} btnClass={"page-btn-active"} />
      </span>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={currentPage + 1} btnClass={"page-btn"} />
      </Link>
      {/* <PageBtn btnName={"Дараах"} className={"pageBtn-active"} /> */}
    </div>
  );
}
