import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../utils/Loader";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();

  //url'deki arama parametlerine eris
  const order = searchParams.get("sorting");
  const query = searchParams.get("search");

  useEffect(() => {
    //API'a gonderilecek parametleri belirle

    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };
    //API'den kitap verilerini al ve state'e aktar.
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, [order, query]);
  return (
    <div className="flex-grow-1 p-5">
      <h3>{!books ? <Loader /> : books.length} books find</h3>

      <FilterArea />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-5">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
