import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-1 w-100 h-100">
      <img className="card-img-top img-fluid" src={book.image} />

      <div className="card-body d-flex flex-column">
        <h4 className="card-title flex-grow-1"> {book.title}</h4>
        <h5 className="fs-6 flex-grow-1">{book.author}</h5>
      </div>

      <Link to={`/product/${book.id}`} className="btn btn-primary w-100">
        {" "}
        Read more
      </Link>
    </div>
  );
};

export default Card;
