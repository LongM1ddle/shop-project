import { Route, Routes } from "react-router-dom";
import "./App.css";
import UniwearPage from "./components/UniwearPage/UniwearPage";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import Header from "./components/Header/Header";
import ShoppingCartLayout from "./components/ShoppingCartLayout/ShoppingCartLayout";
import { RegisterModule } from "./components/RegisterModule/registerModule";
import { AuthLayout } from "./components/AuthLayout/AuthLayout";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<RegisterModule></RegisterModule>}></Route>
        <Route path="/Main" element={<UniwearPage></UniwearPage>}></Route>
        <Route path="/Product" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/Checkout" element={<ShoppingCartLayout></ShoppingCartLayout>}></Route>
        <Route path="/Register" element={<AuthLayout></AuthLayout>}></Route>
      </Routes>
    </>
  );
}

export default App;
