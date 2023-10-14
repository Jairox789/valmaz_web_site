import { InfoItem } from "../Talent/InfoItem/InfoItem";
import "./Form.css";
import { BiSolidMap, BiLogoWhatsapp } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const Form = () => {
  //LOGICA
  return (
    <div className="quote_form">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu nombre"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu empresa"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu dirección de correo electrónico"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu teléfono"
        />

        <select className="form-select" name="select">
          <option value="" disabled selected>
            Selecciona un servicio
          </option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>

        <input className="btn_call_to_action_v2" type="submit" />
      </form>
      <div className="quote_info">
        <p>¿Tienes dudas?</p>
        <p>Contactos para saber más</p>
        <InfoItem
          icon={<BiSolidMap />}
          title={"Oficina central"}
          info={
            "Blvd. Agua Caliente 9955-Int. 507, Calete, 22044 Tijuana, B.C."
          }
        />
        <InfoItem
          icon={<BiLogoWhatsapp />}
          title={"Nuestro teléfono"}
          info={"664 889 5225"}
        />
        <InfoItem
          icon={<MdEmail />}
          title={"Escríbenos"}
          info={"VALMAZ@GMAIL.COM"}
        />
      </div>
    </div>
  );
};
