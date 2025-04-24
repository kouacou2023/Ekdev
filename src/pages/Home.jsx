import Title from "../components/Title";
import SouTitle from "../components/SouTitle";
import Buttonprincipal from "../components/Buttonprincipal";
import { projectlist } from "../components/Projectlist";
import { MapPinSimple } from "@phosphor-icons/react";
import { useState } from "react";
import SlideClient from "../components/SlideClient";
import Stacklist from "../components/Stacklist";
import { NavLink, Link } from "react-router-dom";
import Letconnect from "../components/Letconnect";
import { flyers } from "../components/SocialFlyersList";
import { Logolist } from "../components/LogoList";
import { motion, AnimatePresence } from "motion/react";
import TopScroll from "../components/TopScroll";

export default function Home() {
  const [visibleProjects] = useState(2);
  const [visibleFlyers] = useState(6);
  const [selectImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-6 font-Manrope m-5">
      <div className=" space-y-10">
        <Title title="Hello! Emmanuel à votre disposition." />
        <p className=" text-base text-primary-500">
          Concepteur de sites web passionné, integrateur et web designer.A le
          don de transformer les idées en sites web visuellement étonnants et
          conviviaux.
        </p>
      </div>
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex mb-5 md:mb-0">
          <MapPinSimple className="text-primary-50" size={24} weight="fill" />
          <p className="text-base text-primary-500"> Abidjan, Marcory</p>
        </div>
        <p className="text-base hidden md:block md:text-xs text-primary-500">
          ................................................................
        </p>
        <div className="">
          <NavLink to="/about">
            <Buttonprincipal url="" title="ME CONNAITRE" />
          </NavLink>
        </div>
      </div>
      <div className="space-y-10 pt-10">
        <SouTitle Stitle="Projets Recent" />
        <div className="grid pb-5 md:grid-cols-2 gap-10">
          {projectlist.slice(0, visibleProjects).map((project, index) => (
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

        <SouTitle Stitle="Flyers" />
        <div className="grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4">
          {/* Boucle sur toutes les images reçues via la prop "flyers" */}
          {flyers.slice(0, visibleFlyers).map((flyer, index) => (
            <img
              className="rounded-lg"
              key={index} // Clé unique pour optimiser le rendu React
              src={flyer.img} // Source de l'image
              alt="" // Texte alternatif pour l'accessibilité
              onClick={() => setSelectedImage(flyer.img)}
            />
          ))}

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

        <SouTitle Stitle="Logos & Déclinaisons" />
        <div className="grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4">
          {/* Boucle sur toutes les images reçues via la prop "flyers" */}
          {Logolist.slice(0, visibleFlyers).map((Logolist, index) => (
            <img
              className="rounded-lg"
              key={index} // Clé unique pour optimiser le rendu React
              src={Logolist.img} // Source de l'image
              alt="" // Texte alternatif pour l'accessibilité
              onClick={() => setSelectedImage(Logolist.img)}
            />
          ))}

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

        <div className=" md:flex md:justify-between md:items-center ">
          <p className="text-base hidden md:block md:text-xs text-primary-500">
            ................................................................
          </p>
          <NavLink to="/projets">
            <Buttonprincipal title="VOIR PLUSIEURS PROJECTS" />
          </NavLink>
        </div>
      </div>
      <div className="pt-12">
        <SouTitle Stitle="Stack" />
        <Stacklist className="" />
      </div>
      <div className="pt-10 md:flex md:justify-between md:items-center ">
        <p className="text-base hidden md:block md:text-xs text-primary-500">
          ................................................................
        </p>
        <NavLink to="/Stack">
          <Buttonprincipal title="VOIR PLUSIEURS STACK" />
        </NavLink>
      </div>

      <div className="pt-12">
        <SouTitle Stitle="Clients Satisfaits" />
        <SlideClient />
      </div>

      <div>
        <Letconnect />
      </div>

      <div>
        <TopScroll />
      </div>
    </div>
  );
}
