import { useEffect, useState } from "react";
import { useApiContext } from "../../../context/ApiContext";
import "./UploadImage.css";

export const UploadImage = ({ text, setImg, img, category }) => {
  //LOGICA
  const { apiUrl } = useApiContext();
  const [imgFile, setImgFile] = useState("");

  const uploadImage = () => {
    if (imgFile) {
      const formData = new FormData();
      formData.append("imagen", imgFile);
      formData.append("category", category);

      fetch(apiUrl + "/upload_image/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setImg(data);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  useEffect(() => {
    uploadImage();
  }, [imgFile]);

  return (
    <>
      <label htmlFor="formFile" className="form-label">
        {text}
      </label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        key={new Date()}
        onChange={(e) => {
          setImgFile(e.target.files[0]);
          uploadImage();
        }}
      />
    </>
  );
};
