import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="d-flex flex-column gap-5 container p-4 justify-content-center align-items-center vh-100">
      <h1 className="text-center"> Welcome! </h1>
      <img className="w-50 rounded-3 " src="/book.gif" />

      <p>
        {" "}
        You can find all new releases on the
        <Link to={"/products"}> Products Page </Link>
      </p>
    </div>
  );
};

export default MainPage;
