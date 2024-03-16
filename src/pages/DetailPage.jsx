import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BookInfo from "../utils/BookInfo";

const DetailPage = () => {
  //Dinamik sayfa: sayfa dizayni ayni kalirken iceriginin dinamik sekilde genelde url'de parametreye gore degisen sayfalardir.

  // useNavigate fonsiyonunu cagirip yonlendirme gorevini yapacak olan fonsiyona erisme
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  //1) url'deki id parametresi al
  //useParams url'e eklenmis olan pathParams'a erisim saglar.

  const { id } = useParams();
  //2) id'sini bildigimiz kitabin bilgilerini api'den al
  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        // urunun bilgisi api'dan gelmesiyse kullaniciyi 404 sayfasina yonlendir.
        //hata mesajini 4904 sayfasina aktar
        navigate("/undefined", { state: err.message });
      });
  }, []);
  return (
    <div>
      {/* kitap verisi gelmediyse yukleniyor bas*/}
      {!book && <p> Loading.... </p>}

      {/* kitap verisi geldiyse icerigi ekrana bas*/}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={book.image}
              style={{ maxHeight: "400px" }}
              className="rounded img-fluid shadow"
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1> {book.title} </h1>
            <div className="my-2 ">
              <BookInfo label="Author" value={book.author} />
              <BookInfo label="Description" value={book.description} />
              <BookInfo label="Year" value={book.year} />
              <BookInfo label="Page" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
