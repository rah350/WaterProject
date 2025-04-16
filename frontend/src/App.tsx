import './App.css';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import DonatePage from './pages/DonatePage';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectPage></ProjectPage>}></Route>
            <Route
              path="/projects"
              element={<ProjectPage></ProjectPage>}
            ></Route>
            <Route
              path="/donate/:projectName/:projectId"
              element={<DonatePage></DonatePage>}
            ></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
