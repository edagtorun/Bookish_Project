//Layout extra ayarlar ve kategoriler saayfasunu kaapsayan route'a verdigimiz bir bilesen.
//Nested Route'un kanullanim alanlari:

//1. Sadece birkac sayfada ortak olarak kullanilacak alanlaari belirlemeye yarar.
//2. Projedeki bazi sayfalarin hangi tipteki kullanicilar tarafindan erisilebilir oldugunu belirlememeizi saglar.
import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  //API'den alindigini varsayalim
  const user = {
    name: "eda",
    type: "admin",
  };

  //egerki kullanici tipi admin degilse alt routlara erisime izin verme

  if (user.type !== "admin") {
    //? 1. hook kullanimi
    //render islemi bitmeden once yonlendirdigi icin uyari veriyor
    //navigate ('/)
    //? 2. Bilesen ile yonlendire

    return <Navigate to={"/"} />;
  }
  return (
    <div className="d-flex gap-5 p-5">
      <aside className="d-flex flex-column bg-light p-3 rounded">
        <NavLink to={"/extra/categories"}>Categoires</NavLink>
        <NavLink to={"/extra/campaign"}>Special Offer</NavLink>
        <NavLink to={"/extra/setting"}> Settings</NavLink>
      </aside>

      <div>
        {/* Asil sayfa icerigi
        Alt route'un kapsayici route icerisinde hangi noktoda ekrana basilacagini belirler.
        */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
