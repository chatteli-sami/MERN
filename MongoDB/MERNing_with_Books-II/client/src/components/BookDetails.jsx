import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleBorrow = () => {
    fetch(`/api/books/${id}`, { method: "DELETE" })
      .then(() => navigate("/books"))
      .catch((err) => console.error(err));
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Available: {book.available ? "Yes" : "No"}</p>
      <button onClick={handleBorrow}>Borrow</button>
    </div>
  );
}

export default BookDetails;
