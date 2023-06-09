import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/itemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer"
import CartContainer from "./containers/CartContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ShopProvider from "./context/ShopProvider";
import MainPage from "./components/MainPage";
import FreeShipping from "./components/FreeShipping";
import Footer from "./components/Footer";
import Testimonios from "./components/Testimonios";
import AuthContainer from "./containers/AuthContainer";
import AuthProvider from "./context/AuthProvider";
import PreguntasFrec from "./components/PreguntasFrec";
import SobreNosotros from "./components/SobreNosotros";
import PoliticasPrivacidad from "./components/PoliticasPrivacidad";
import SearchProvider from "./context/SearchProvider";
import SearchP from "./components/SearchP";

function App() {
    

  return (
  <SearchProvider>
  <AuthProvider>
    <ShopProvider>
      <BrowserRouter>
      <NavBar/>
      <FreeShipping/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="/category/:categoryId" element={<ItemListContainer/>}/> */}
        <Route path="/itemlist" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/testimonios" element={<Testimonios/>}/>
        <Route path="/preguntasfrecuentes" element={<PreguntasFrec/>}/>
        <Route path="/sobrenosotros" element={<SobreNosotros/>}/>
        <Route path="/politicasprivacidad" element={<PoliticasPrivacidad/>}/>
        <Route path="/user" element={<AuthContainer/>}/>
        <Route path="/search" element={<SearchP/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </ShopProvider>
  </AuthProvider>
  </SearchProvider>
  )
}

export default App
