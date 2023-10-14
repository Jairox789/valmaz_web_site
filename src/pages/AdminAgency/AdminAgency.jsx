import "./AdminAgency.css";
import { useEffect } from "react";
import { TestimonyCard } from "../../components/Agency/TestimonyCard/TestimonyCard";
import { AdminAddElement } from "../../components/Admin/AdminAddElement/AdminAddElement";

export const AdminAgency = () => {
  //LOGICA

  const testimonys = [
    {
      img: "https://media.licdn.com/dms/image/C4E03AQHRNzjteHSlRw/profile-displayphoto-shrink_800_800/0/1528047318157?e=1701907200&v=beta&t=Pa9FztH-uSY_91qat2fbItRgVcJRrvQcIeohuOXZYZ4",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://t1.uc.ltmcdn.com/es/posts/1/8/4/como_cuidar_la_barba_41481_600.webp",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RQSMx2hlkQAV-N8h5LVbLY-imS_H84Yfr-pibnwsREdUhaIW",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://valmaz.com",
        twitter: "https://instagram.com",
      },
    },
  ];

  useEffect(() => {
    // Desplaza la página al principio (0, 0)
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main_admin admin_agency">
      <AdminAddElement
        title={"Testimonios"}
        toAdd={"Añadir un nuevo testimonio"}
      />

      <div className="testimony_container">
        {testimonys.map((testimony, index) => (
          <TestimonyCard
            key={index}
            img={testimony.img}
            facebook={testimony.social.facebook}
            instagram={testimony.social.instagram}
            linkedin={testimony.social.linkedin}
            website={testimony.social.website}
            twitter={testimony.social.twitter}
            editMode={true}
          />
        ))}
      </div>
    </main>
  );
};
