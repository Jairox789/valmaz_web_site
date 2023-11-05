import "./InsertImagesPortfolio.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { UploadImage } from "../../UploadImage/UploadImage";

export const InsertImagesPortfolio = ({ setImgs, imgs }) => {
  const handleImageUpload = (index, image) => {
    const updatedImages = [...imgs];
    updatedImages[index] = image;
    setImgs(updatedImages);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...imgs];
    updatedImages.splice(index, 1);
    setImgs(updatedImages);
  };
  return (
    <div className="insert_img_container">
      {imgs.length > 0
        ? imgs.map((image, index) => (
            <div key={index}>
              <UploadImage
                category={"portfolio"}
                text={"Selecciona una imagen"}
                setImg={(image) => handleImageUpload(index, image)}
              />
              <AiFillCloseCircle onClick={() => handleImageDelete(index)} />
            </div>
          ))
        : ""}
    </div>
  );
};
