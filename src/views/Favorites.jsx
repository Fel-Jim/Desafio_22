import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos, toggleLike } = useContext(PhotoContext);

  const favoritePhotos = photos.filter((photo) => photo.liked);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="gallery">
        {favoritePhotos.map((photo) => (
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
    </div>
  );
};

export default Favorites;
