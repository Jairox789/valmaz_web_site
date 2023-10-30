import { useEffect, useState } from "react";
import { Create } from "../../components/Admin/ManageAgency/Create/Create";
import "./AdminCreateTestimony.css";
import { TestimonyCard } from "../../components/Agency/TestimonyCard/TestimonyCard";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../context/ApiContext";

export const AdminCreateTestimony = ({ editMode = false }) => {
  //LOGICA
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");

  const { id } = useParams();
  const [testimony, setTestimony] = useState({});
  const { apiUrl } = useApiContext();

  const getTestimonialsInfo = async () => {
    fetch(apiUrl + "/testimonials/" + id)
      .then((response) => response.json())
      .then((data) => {
        setTestimony(data);
      });
  };

  useEffect(() => {
    if (editMode) {
      getTestimonialsInfo();
    }
  }, []);

  useEffect(() => {
    setName(testimony.name);
    setImg(testimony.img ? testimony.img : "");
    setFacebook(testimony.social ? testimony.social.facebook : "");
    setInstagram(testimony.social ? testimony.social.instagram : "");
    setLinkedin(testimony.social ? testimony.social.linkedin : "");
    setTwitter(testimony.social ? testimony.social.twitter : "");
    setWebsite(testimony.social ? testimony.social.website : "");
  }, [testimony]);

  return (
    <main className="main_admin admin_create_testimony">
      <h1>{editMode ? "Editar testimonio" : "Crear testimonio"}</h1>
      <Create
        id={id}
        editMode={editMode}
        setName={setName}
        name={name}
        setImg={setImg}
        img={img}
        setFacebook={setFacebook}
        facebook={facebook}
        setInstagram={setInstagram}
        instagram={instagram}
        setLinkedin={setLinkedin}
        linkedin={linkedin}
        setWebsite={setWebsite}
        website={website}
        setTwitter={setTwitter}
        twitter={twitter}
      />

      <h2>Vista previa del testimonio</h2>

      <TestimonyCard
        createMode={true}
        name={name}
        img={img.url ? img.url : ""}
        facebook={facebook}
        instagram={instagram}
        linkedin={linkedin}
        website={website}
        twitter={twitter}
      />
    </main>
  );
};
