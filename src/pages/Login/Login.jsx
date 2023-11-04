import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export const Login = () => {
  //LOGICA
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { admin, login } = useAuth();

  const handleInputs = (setter, info) => {
    setter(info);
  };

  useEffect(() => {
    console.log(admin);
  }, []);

  return (
    <div className="container_login">
      <div className="frame">
        <div className="view">
          <img
            src="https://valmaz.000webhostapp.com/valmaz_web_site_backend/public/media/logo_light.png"
            alt="logo"
          />
          <span>Administrador de sitio web</span>
        </div>

        <form>
          <h1>Iniciar sesión</h1>
          <input
            onChange={(e) => {
              handleInputs(setUser, e.target.value);
            }}
            value={user}
            type="text"
            placeholder="Usuario"
          />

          <input
            onChange={(e) => {
              handleInputs(setPassword, e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Contraseña"
          />

          <center>
            <button
              onClick={(e) => {
                e.preventDefault();
                login(user, password);
                console.log(admin);
              }}
              className="btn btn-primary"
              type="submit"
            >
              Iniciar
            </button>
          </center>
          <span className="status_login">
            {admin.message ? admin.message : ""}
          </span>
        </form>
      </div>
    </div>
  );
};
