import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { useEffect, useState } from "react";
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
import { Login } from "./pages/Login/Login";
import { AdminCreateService } from "./pages/AdminCreateService/AdminCreateService";
import { AdminCreateTestimony } from "./pages/AdminCreateTestimony/AdminCreateTestimony";
import { AdminCreateVacant } from "./pages/AdminCreateVacant/AdminCreateVacant";
import { AdminCreateBlog } from "./pages/Admin/AdminCreateBlog/AdminCreateBlog";
import { AdminAccount } from "./pages/AdminAccount/AdminAccount";
import { AdminPortfolios } from "./pages/AdminPortfolios/AdminPortfolios";
import { AdminCreatePortfolios } from "./pages/AdminCreatePortfolios/AdminCreatePortfolios";
import { useAuth } from "./context/AuthContext";
import { NotFound } from "./pages/NotFound/NotFound/NotFound";

function App() {
  //LOGICA
  const [menuVisible, setMenuVisible] = useState(false);

  const { admin, getUserDataLocalStorage, login } = useAuth();
  const auth = admin ? admin.success : false;

  useEffect(() => {
    const userData = getUserDataLocalStorage();
    login(userData.user, userData.password);
  }, []);

  const toggleMenu = (state = true) => {
    if (state) {
      setMenuVisible(!menuVisible);
    } else {
      setMenuVisible(false);
    }
  };

  return (
    <Routes>
      {auth ? (
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
            <Route
              path="/blog/categorias/:slug"
              element={<Blog searchByCategory={true} />}
            />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/cotizar" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/servicios" element={<AdminServices />} />
            <Route
              path="/admin/servicios/crear"
              element={<AdminCreateService />}
            />
            <Route
              path="/admin/servicios/editar/:id"
              element={<AdminCreateService editMode={true} />}
            />
            <Route path="/admin/proyectos" element={<AdminPortfolios />} />
            <Route
              path="/admin/proyectos/crear"
              element={<AdminCreatePortfolios />}
            />
            <Route
              path="/admin/proyectos/editar/:id"
              element={<AdminCreatePortfolios editMode={true} />}
            />
            <Route path="/admin/agencia" element={<AdminAgency />} />
            <Route
              path="/admin/agencia/crear"
              element={<AdminCreateTestimony />}
            />
            <Route
              path="/admin/agencia/editar/:id"
              element={<AdminCreateTestimony editMode={true} />}
            />
            <Route path="/admin/talento" element={<AdminTalent />} />
            <Route
              path="/admin/talento/crear"
              element={<AdminCreateVacant />}
            />
            <Route
              path="/admin/talento/editar/:id"
              element={<AdminCreateVacant editMode={true} />}
            />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/blog/crear" element={<AdminCreateBlog />} />
            <Route
              path="/admin/blog/editar/:id"
              element={<AdminCreateBlog editMode={true} />}
            />
            <Route path="/admin/cotizar" element={<AdminQuote />} />
            <Route path="/admin/mi-cuenta" element={<AdminAccount />} />
            <Route path="*" element={<NotFound />} />
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
          <Route
            path="/blog/categorias/:slug"
            element={<Blog searchByCategory={true} />}
          />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/cotizar" element={<Quote />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/servicios" element={<Login />} />
          <Route path="/admin/agencia" element={<Login />} />
          <Route path="/admin/talento" element={<Login />} />
          <Route path="/admin/blog" element={<Login />} />
          <Route path="/admin/cotizar" element={<Login />} />
          <Route path="/admin/mi-cuenta" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
