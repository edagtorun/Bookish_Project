import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import UndefinedPage from "./pages/UndefinedPage";
import Layout from "./components/Layout";

const App = () => {
  //tarayicidaki url'e gore ekrana hangi bilesenin basilacagini belirle

  //React Router Dom tarayicidaki url'e window nesnesi ile erisir.
  return (
    <BrowserRouter>
      {/* Routes disinda butun sayfalar icin ortak */}
      <Header />

      <Routes>
        {/* Projedeki sayfalari tanimladigimiz bir kapsayici
         * Route:Pri=ojedeki her bir sayfa icin tanimlanir
         */}
        <Route path="/" element={<MainPage />} />
        {/* Projedeki her bir sayfa*/}
        <Route path="/products" element={<ProductsPage />} />
        {/* Dynamic Route */}
        <Route path="/product/:id" element={<DetailPage />} />
        {/* Undefined Route: tanimsiz bir route'a yonlenirse*/}
        <Route path="*" element={<UndefinedPage />} />

        {/* Nested Routes: Ic ice yollar */}
        <Route path="/extra" element={<Layout />}>
          <Route path="categories" element={<h1>Categoires</h1>}></Route>
          <Route path="campaign" element={<h1>Special Offer</h1>}></Route>
          <Route path="setting" element={<h1>Settings</h1>}></Route>
          <Route></Route>
        </Route>
      </Routes>

      {/* Routes disinda butun sayfalar icin ortak */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
