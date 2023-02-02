import { useParams } from "react-router-dom";

export default function () {
  const pageNumber = useParams();
  return <div path={pageNumber}>Page</div>;
}
