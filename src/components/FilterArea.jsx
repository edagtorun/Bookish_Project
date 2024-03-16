import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  //useParams url'deki arama parametrelerini yonetmemizi saglar
  //geriye dizi icerisinde iki deger dondurur.
  // 1. urldeki arama parametleri
  //2. bunlari degistirmeye yarayan method

  const [searchParams, setSearchParams] = useSearchParams();

  //form gonderilince
  const handleSubmit = (e) => {
    //sayfa yenilenmeyi  engelle
    e.preventDefault();

    //aratilan terimi url'de  aramaparametre olarak ekle
    searchParams.set("search", e.target[0].value);

    //url'i guncelle
    setSearchParams(searchParams);
  };

  //selected degisince
  const handleChange = (e) => {
    //eklenecek parametreyi belirle
    searchParams.set("sorting", e.target.value);

    //url'i guncelle
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center">
        <label>Choise </label>
        <select onChange={handleChange} className="form-select ">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("search")}
          placeholder="text to search.."
          className="form-control"
          type="text"
        ></input>
        <button className="btn btn-primary">Find</button>
      </form>
    </div>
  );
};

export default FilterArea;
