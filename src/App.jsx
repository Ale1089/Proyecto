import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp.jsx";
import Roles from "./pages/Roles.jsx";
import SignIn from "./pages/SignIn.jsx";
import PagPrincipal from "./pages/PagPrincipal.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/" element={<SignUp />} />
          
          <Route path="/Roles" element={<Roles />} />

          <Route path="/SignIn" element={<SignIn />} />

          <Route path="/PagPrincipal" element={<PagPrincipal />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;