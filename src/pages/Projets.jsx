import Title from "../components/Title";
import { projectlist } from "../components/Projectlist";
import { Link } from "react-router-dom";
import { flyers } from "../components/SocialFlyersList";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Letconnect from "../components/Letconnect";
import { Logolist } from "../components/LogoList";

export default function Projets() {
  const [selectImage, setSelectedImage] = useState(null);

  return (
    <div className="m-5 font-Manrope">
      <Title title="Mes projets dev remarquables " />
      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectlist.map((project, index) => (
          <div key={index} className=" cursor-pointer">
            <Link to={`/projects/${project.slug}`}>
              <img className=" rounded-3xl mb-4" src={project.image} alt="" />
              <p className=" text-primary-100 md:text-xl text-lg">
                {project.category}
              </p>
              <h3 className=" md:text-3xl text-2xl font-light text-primary-500">
                {project.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="pt-12">
        <Title title="Social Media Flyers" />
        <div className="pt-10 grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4">
          {/* Boucle sur toutes les images reçues via la prop "flyers" */}
          {flyers.map((flyer, index) => (
            <img
              key={index} // Clé unique pour optimiser le rendu React
              src={flyer.img} // Source de l'image
              alt={`Flyer ${index + 1}`} // Texte alternatif pour l'accessibilité
              className=" object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              // Lorsqu'on clique sur une image, on met à jour l'état avec son URL
              onClick={() => setSelectedImage(flyer.img)}
            />
          ))}

          {/* Modale pour afficher l'image en grand, rendue uniquement si une image est sélectionnée */}
          <AnimatePresence>
            {selectImage && ( // Affiche la modale seulement si une image est sélectionnée
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                initial={{ opacity: 0 }} // L'opacité commence à 0 (invisible)
                animate={{ opacity: 1 }} // Animation d'apparition en fondu (opacité 1)
                exit={{ opacity: 0 }} // Animation de disparition en fondu (opacité 0)
                // Lorsqu'on clique sur le fond sombre, on ferme la modale en remettant null
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  src={selectImage} // Affiche l'image sélectionnée
                  alt="Image en grand" // Texte alternatif pour l'accessibilité
                  className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                  initial={{ scale: 0.8 }} // L'image commence plus petite
                  animate={{ scale: 1 }} // Animation de zoom progressif
                  exit={{ scale: 0.8 }} // Effet de rétrécissement lors de la fermeture
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="pt-12">
          <Title title="Logos & Déclinaisons" />
          <div className="pt-10 grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4">
            {/* Boucle sur toutes les images reçues via la prop "flyers" */}
            {Logolist.map((Logolist, index) => (
              <img
                key={index} // Clé unique pour optimiser le rendu React
                src={Logolist.img} // Source de l'image
                alt={`Flyer ${index + 1}`} // Texte alternatif pour l'accessibilité
                className="object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                // Lorsqu'on clique sur une image, on met à jour l'état avec son URL
                onClick={() => setSelectedImage(Logolist.img)}
              />
            ))}

            {/* Modale pour afficher l'image en grand, rendue uniquement si une image est sélectionnée */}
            <AnimatePresence>
              {selectImage && ( // Affiche la modale seulement si une image est sélectionnée
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                  initial={{ opacity: 0 }} // L'opacité commence à 0 (invisible)
                  animate={{ opacity: 1 }} // Animation d'apparition en fondu (opacité 1)
                  exit={{ opacity: 0 }} // Animation de disparition en fondu (opacité 0)
                  // Lorsqu'on clique sur le fond sombre, on ferme la modale en remettant null
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.img
                    src={selectImage} // Affiche l'image sélectionnée
                    alt="Image en grand" // Texte alternatif pour l'accessibilité
                    className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }} // L'image commence plus petite
                    animate={{ scale: 1 }} // Animation de zoom progressif
                    exit={{ scale: 0.8 }} // Effet de rétrécissement lors de la fermeture
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div />
        <Letconnect />
      </div>
    </div>
  );
}
