import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Header } from "./Components/Header/Header";
import { CarritoCompras } from "./Pages/CarritoCompras";
import { ProductosProvider } from "./Context/ProductosProvaider";
import { CarroComprasProvaider } from "./Context/CarroComprasProvaider";
import { Footer } from "./Components/Footer/Footer";
import { Productos } from "./Pages/Productos";

function App() {
  return (
    <>
      <ProductosProvider>
        <CarroComprasProvaider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carroCompras" element={<CarritoCompras />} />
          </Routes>
          <Footer/>
        </CarroComprasProvaider>
      </ProductosProvider>
    </>
  );
}

export default App;
