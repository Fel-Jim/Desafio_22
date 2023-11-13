import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, toggleLike } = useContext(PhotoContext);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="galleryBox"
          style={{ width: "15rem", height: "15rem" }}
        >
          <img
            style={{ width: "15rem", height: "15rem" }}
            src={photo.src.tiny}
          />
          <div className="heart-icon" onClick={() => toggleLike(photo.id)}>
            <IconHeart filled={photo.liked} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
