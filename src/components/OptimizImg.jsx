import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";

const OptimizedImage = ({ src, alt, maxSizeMB = 0.5, maxWidthOrHeight = 1024 }) => {
  // État pour stocker l'URL de l'image compressée
  const [compressedSrc, setCompressedSrc] = useState(null);

  // Fonction pour compresser l'image
  const compressImage = async () => {
    try {
      // 1️⃣ Récupérer l'image depuis son URL
      const response = await fetch(src);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });

      // 2️⃣ Options de compression
      const options = {
        maxSizeMB, // Taille max en mégaoctets (Mo)
        maxWidthOrHeight, // Largeur ou hauteur max en pixels
        useWebWorker: true, // Utilisation du Web Worker pour éviter les blocages
      };

      // 3️⃣ Compression de l'image
      const compressedFile = await imageCompression(file, options);

      // 4️⃣ Création d'une URL pour l'affichage de l'image compressée
      const compressedURL = URL.createObjectURL(compressedFile);
      setCompressedSrc(compressedURL);
    } catch (error) {
      console.error("Erreur lors de la compression :", error);
    }
  };

  // ⚡️ Lancer la compression dès que le composant est monté
  useEffect(() => {
    compressImage();
  }, [src]); // Exécute la compression quand `src` change

  return (
    <img
      src={compressedSrc || src} // Afficher l'image compressée si disponible
      alt={alt}
      loading="lazy" // Lazy loading pour un chargement plus rapide
      style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }}
    />
  );
};

export default OptimizedImage;
