import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./AdminAccount.css";

export const AdminAccount = () => {
  //LOGICA

  const { modifyAccount } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [enableBtnSubmit, setEnableBtnSubmit] = useState(false);
  const [response, setResponse] = useState("");

  const handleEnableBtnSubmit = () => {
    let enable = false;
    if (
      newPassword === newPasswordConfirm &&
      newPassword !== "" &&
      newPasswordConfirm !== ""
    ) {
      enable = true;
    }
    setEnableBtnSubmit(enable);
  };

  useEffect(() => {
    document.title = "Administrador de sitio (Mi cuenta)";
    handleEnableBtnSubmit();
  }, [newPassword, newPasswordConfirm]);

  return (
    <main className="main_admin admin_account">
      <div className="container_settings">
        <h1>Configuración de cuenta</h1>
        <span>Cambia tu contraseña y/o usuario</span>
        <form>
          <center>
            <h3>Confirmar cuenta</h3>
          </center>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            type="text"
            placeholder="Usuario"
            className="form-control"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Contraseña"
            className="form-control"
          />

          <center>
            <h3>Nuevas credenciales</h3>
          </center>
          <input
            onChange={(e) => {
              setNewUser(e.target.value);
            }}
            value={newUser}
            type="text"
            placeholder="Nuevo usuario"
            className="form-control"
          />

          <input
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
            type="password"
            placeholder="Nueva Contraseña"
            className="form-control"
          />

          <input
            onChange={(e) => {
              setNewPasswordConfirm(e.target.value);
            }}
            value={newPasswordConfirm}
            type="password"
            placeholder="Confirmar contraseña"
            className="form-control"
          />

          <center>
            <button
              disabled={!enableBtnSubmit}
              onClick={(e) => {
                e.preventDefault();
                modifyAccount(
                  user,
                  password,
                  newUser,
                  newPassword,
                  setResponse
                );
              }}
              className="btn btn-primary"
            >
              Confirmar
            </button>
          </center>
        </form>
      </div>
    </main>
  );
};
