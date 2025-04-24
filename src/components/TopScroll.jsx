import { ArrowCircleUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function TopScroll() {
  // État pour afficher ou cacher le bouton en fonction du scroll
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fonction qui vérifie la position du scroll
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ajoute un écouteur d'événement au scroll
    window.addEventListener("scroll", toggleVisibility);

    // Nettoie l'écouteur quand le composant est démonté
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animation fluide
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-primary-500 shadow-lg hover:bg-white/20 transition-all duration-300"
      >
        <ArrowCircleUp size={32} weight="fill" />
      </button>
    )
  );
}
