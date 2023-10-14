import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { useState } from "react";
import { Services } from "./pages/Services/Services";
import { ServicesDetails } from "./pages/ServicesDetails/ServicesDetails";
import { Portfolios } from "./pages/Portfolios/Portfolios";
import { PortfoliosDetails } from "./pages/PortfoliosDetails/PortfoliosDetails";
import { Agency } from "./pages/Agency/Agency";
import { Talent } from "./pages/Talent/Talent";
import { Blog } from "./pages/Blog/Blog";
import { BlogDetail } from "./pages/BlogDetail/BlogDetail";
import { Quote } from "./pages/Quote/Quote";
import { Admin } from "./pages/Admin/Admin";
import { LayoutAdmin } from "./components/Admin/LayoutAdmin/LayoutAdmin";
import { AdminServices } from "./pages/AdminServices/AdminServices";
import { AdminAgency } from "./pages/AdminAgency/AdminAgency";
import { AdminTalent } from "./pages/AdminTalent/AdminTalent";
import { AdminBlog } from "./pages/AdminBlog/AdminBlog";
import { AdminQuote } from "./pages/AdminQuote/AdminQuote";

function App() {
  //LOGICA
  const [menuVisible, setMenuVisible] = useState(false);

  const [isAdmin, setIsAdmin] = useState(true);

  const toggleMenu = (state = true) => {
    if (state) {
      setMenuVisible(!menuVisible);
    } else {
      setMenuVisible(false);
    }
  };

  return (
    <Routes>
      {isAdmin ? (
        <>
          <Route
            path="/"
            element={
              <Layout toggleMenu={toggleMenu} menuVisible={menuVisible} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/:slug" element={<ServicesDetails />} />
            <Route path="/proyectos" element={<Portfolios />} />
            <Route path="/proyectos/:slug" element={<PortfoliosDetails />} />
            <Route path="/agencia" element={<Agency />} />
            <Route path="/talento" element={<Talent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/cotizar" element={<Quote />} />
          </Route>

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/servicios" element={<AdminServices />} />
            <Route path="/admin/agencia" element={<AdminAgency />} />
            <Route path="/admin/talento" element={<AdminTalent />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/cotizar" element={<AdminQuote />} />
          </Route>
        </>
      ) : (
        <Route
          path="/"
          element={<Layout toggleMenu={toggleMenu} menuVisible={menuVisible} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/:slug" element={<ServicesDetails />} />
          <Route path="/proyectos" element={<Portfolios />} />
          <Route path="/proyectos/:slug" element={<PortfoliosDetails />} />
          <Route path="/agencia" element={<Agency />} />
          <Route path="/talento" element={<Talent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/cotizar" element={<Quote />} />
          <Route path="/admin" element={<h1>Incia sesión</h1>} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
