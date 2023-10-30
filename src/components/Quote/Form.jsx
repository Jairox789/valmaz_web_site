import { useEffect, useState } from "react";
import { InfoItem } from "../Talent/InfoItem/InfoItem";
import "./Form.css";
import { BiSolidMap, BiLogoWhatsapp } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useApiContext } from "../../context/ApiContext";

export const Form = () => {
  //LOGICA
  const [servicesInfo, setServicesInfo] = useState({});

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [response, setResponse] = useState({});

  const { apiUrl } = useApiContext();

  // const [statusForm, setStatusForm] = useState(false);

  //console.log(statusForm);

  const getServicesInfo = async () => {
    fetch(apiUrl + "/services/")
      .then((response) => response.json())
      .then((data) => {
        setServicesInfo(data);
      });
  };

  const handleInput = (setter, info) => {
    setter(info);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sendQuote = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("business", business);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("service", selectedOption);

    // Hacer una solicitud para subir la imagen al servidor
    fetch(apiUrl + "/quote/", {
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
  };

  const isFormFill = () => {
    let isFill = false;
    if (
      name != "" &&
      business != "" &&
      email != "" &&
      phone != "" &&
      selectedOption != ""
    ) {
      isFill = true;
    }
    return isFill;
  };

  const resetForm = () => {
    setName("");
    setBusiness("");
    setEmail("");
    setPhone("");
    setSelectedOption("");
  };

  useEffect(() => {
    getServicesInfo();
  }, []);

  return (
    <div className="quote_form">
      <form>
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
          placeholder="Escribe tu empresa"
          value={business}
          onChange={(e) => {
            handleInput(setBusiness, e.target.value);
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

        <select
          className="form-select"
          name="select"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {Object.keys(servicesInfo).length > 0 ? (
            servicesInfo.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No hay servicios disponibles
            </option>
          )}
        </select>

        <button
          className="btn_call_to_action_v2"
          onClick={(e) => {
            e.preventDefault();
            if (isFormFill()) {
              sendQuote();
              resetForm();
            } else {
              alert("Debes llenar todos los campos del formulario");
            }
          }}
        >
          Enviar
        </button>
        {response.state ? (
          <p className="response_ok">{response.message}</p>
        ) : (
          <p className="response_ok">{response.message}</p>
        )}
      </form>
      <div className="quote_info">
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
