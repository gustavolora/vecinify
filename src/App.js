import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { FormularioTienda } from "./Components/Formularios/FormularioTienda";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/register/tienda" element={<FormularioTienda/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
