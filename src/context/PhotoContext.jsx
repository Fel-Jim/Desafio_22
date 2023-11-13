import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const apiUrl = "/photos.json";
    axios
      .get(apiUrl)
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        console.log("Error al cargar los datos", error);
      });
  }, []);

  const toggleLike = (id) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );
    setPhotos(updatedPhotos);
  };

  return (
    <PhotoContext.Provider value={{ photos, toggleLike }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
