import { InfoItem } from "../InfoItem/InfoItem";
import "./Form.css";
import { BiSolidMap, BiLogoWhatsapp } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useApiContext } from "../../../context/ApiContext";

export const Form = ({ vacantsInfo }) => {
  // LOGICA
  const [response, setResponse] = useState({});

  const [selectedOption, setSelectedOption] = useState("");
  const [cvSelected, setCvSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { apiUrl } = useApiContext();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInput = (setter, info) => {
    setter(info);
  };

  const uploadCv = () => {
    if (cvSelected) {
      const formData = new FormData();
      formData.append("cv", cvSelected);
      formData.append("vacant", selectedOption);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);

      // Hacer una solicitud para subir la imagen al servidor
      fetch(apiUrl + "/talents/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setResponse("");
          setResponse(data);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  const isFormFill = () => {
    let isFill = false;
    if (
      name != "" &&
      email != "" &&
      cvSelected != "" &&
      phone != "" &&
      selectedOption != ""
    ) {
      isFill = true;
    }
    return isFill;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSelectedOption("");
    setCvSelected("");
  };

  return (
    <div className="talent_form">
      <form>
        <select
          className="form-select"
          name="select"
          value={selectedOption} // Usa value para controlar la opción seleccionada
          onChange={handleSelectChange} // Maneja el cambio de selección
        >
          <option value="" disabled>
            Selecciona una vacante
          </option>
          {vacantsInfo.map((vacant) => (
            <option key={vacant.id} value={vacant.id}>
              {vacant.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu nombre"
          value={name}
          onChange={(e) => {
            handleInput(setName, e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu dirección de correo electrónico"
          value={email}
          onChange={(e) => {
            handleInput(setEmail, e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu teléfono"
          value={phone}
          onChange={(e) => {
            handleInput(setPhone, e.target.value);
          }}
        />

        <label htmlFor="cvInput" className="form-label">
          Adjunta tu CV (PDF)
        </label>
        <input
          type="file"
          accept="application/pdf"
          className="form-control"
          id="cvInput"
          onChange={(e) => {
            setCvSelected(e.target.files[0]);
          }}
        />

        <input
          className="btn_call_to_action_v2"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (isFormFill()) {
              uploadCv();
              resetForm();
            } else {
              alert("Debes llenar todos los campos del formulario");
            }
          }}
        />
        {response.state ? (
          <p className="response_ok">{response.message}</p>
        ) : (
          <p className="response_ok">{response.message}</p>
        )}
      </form>
      <div className="talent_info">
        <p>¿Tienes dudas?</p>
        <p>Contactos para saber más</p>
        <InfoItem
          icon={<BiSolidMap />}
          title={"Oficina central"}
          info={
            <a href="https://www.google.com.mx/maps/place/Valmaz+Marketing/@32.5177417,-117.0206858,17z/data=!3m1!4b1!4m6!3m5!1s0x80d94840208ff4ab:0x91081caa78c1cc22!8m2!3d32.5177372!4d-117.0181109!16s%2Fg%2F11dylrt914?entry=ttu">
              Blvd. Agua Caliente 9955-Int. 507, Calete, 22044 Tijuana, B.C.
            </a>
          }
        />
        <InfoItem
          icon={<BiLogoWhatsapp />}
          title={"Nuestro teléfono"}
          info={<a href="tel:+526648895225">664 889 5225</a>}
        />
        <InfoItem
          icon={<MdEmail />}
          title={"Escríbenos"}
          info={<a href="mailto:victor@valmaz.com">VICTOR@VALMAZ.COM</a>}
        />
      </div>
    </div>
  );
};
