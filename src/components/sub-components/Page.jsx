import { useParams } from "react-router-dom";

export default function Page() {
  const pageNumber = useParams();
  return <span> {pageNumber.id}</span>;
}
