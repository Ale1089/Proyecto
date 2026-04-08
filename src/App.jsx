import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp.jsx";
import Roles from "./pages/Roles.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/" element={<SignUp />} />
          
          <Route path="/Roles" element={<Roles />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;