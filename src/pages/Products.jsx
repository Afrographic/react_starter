import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Products list</h1>
      <p>Showing product with id {id}</p>
    </div>
  );
}