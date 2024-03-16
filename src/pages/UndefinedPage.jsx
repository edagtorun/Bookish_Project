import { Link, useLocation } from "react-router-dom";

const UndefinedPage = () => {
  //navigate ile aktarilan hata mesajina eris
  const loc = useLocation();
  return (
    <div className="container py-6 d-flex flex-column gap-4  align-items-center mt-5  overflow-hidden">
      {loc.state && <p className="bg-danger rounded p-2">{loc.state}</p>}
      <img className="img-fluid rounded w-50" src="/404.gif" alt="" />

      <div>
        <h1>Not Found !</h1>

        <p>There is no such page. </p>

        <Link to={"/"} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default UndefinedPage;
