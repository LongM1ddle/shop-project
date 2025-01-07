import { Route, Routes } from "react-router-dom";
import "./App.css";
import UniwearPage from "./components/UniwearPage/UniwearPage";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import Header from "./components/Header/Header";
import { CartLayout } from "./components/CartLayout/CartLayout";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<UniwearPage></UniwearPage>}></Route>
        <Route path="/Product" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/Checkout" element={<CartLayout></CartLayout>}></Route>
      </Routes>
    </>
  );
}

export default App;
