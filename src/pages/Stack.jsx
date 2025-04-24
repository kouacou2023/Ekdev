import Title from "../components/Title";
import img1 from "./img/React.png";
import img2 from "./img/Photoshop.png";
import img3 from "./img/Tailwind.png";
import img4 from "./img/illustrator.png";
import img5 from "./img/JavaScript-logo.png";
import img6 from "./img/adobe-premiere-pro.png";
import img7 from "./img/metaLogo.png";
import img8 from "./img/Adobe_After_Effects.png";
import developerbg from "./img/develope.png";
import TopScroll from "../components/TopScroll";

import { NavLink } from "react-router-dom";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import Letconnect from "../components/Letconnect";

const data = [
  {
    id: 1,
    logo: img2,
    stack: "Photoshop",
    Stitle: "Graphisme & Manipulation Image",
    text: "Photoshop est mon couteau suisse en matière d'édition d'images. Je l'utilise pour retoucher des photos, créer des graphiques, des flyers, affiches créatives, Kakemono, retouche photo et optimiser des images pour le web. Il me permet de m'assurer que les éléments visuels sont parfaits au pixel près. ",
  },

  {
    id: 2,
    logo: img1,
    stack: "React",
    Stitle: "App Front & Back",
    text: "React est mon cadre de développement web dynamique. Je l'utilise pour créer des applications web interactives avec des interfaces utilisateur riches. Il joue un rôle essentiel dans la création d'expériences web engageantes, réactives et axées sur les données.",
  },
  {
    id: 3,
    logo: img3,
    stack: "Tailwind Css",
    Stitle: "Web Style",
    text: "Tailwind est mon moteur de style et de mise en page. Il permet de créer des sites web visuellement attrayants en contrôlant tout, depuis les polices et les couleurs jusqu'à la conception réactive qui s'adapte à différentes tailles d'écran.",
  },

  {
    id: 4,
    logo: img4,
    stack: "Illustrator",
    Stitle: "Vecteur Graphique",
    text: "Illustrator est mon outil de prédilection pour les graphiques vectoriels et la conception d'icônes. Je l'utilise pour créer des icônes, des logos et des illustrations personnalisés qui s'intègrent parfaitement dans les sites web.",
  },

  {
    id: 5,
    logo: img5,
    stack: "Javascript",
    Stitle: "Dynamic",
    text: "Illustrator est mon outil de prédilection pour les graphiques vectoriels et la conception d'icônes. Je l'utilise pour créer des icônes, des logos et des illustrations personnalisés qui s'intègrent parfaitement dans les sites web.",
  },

  {
    id: 6,
    logo: img6,
    stack: "Premiere Pro",
    Stitle: "Montage video",
    text: "Premiere Pro est mon outil de prédilection pour le montage vidéo professionnel. Je l'utilise pour assembler, éditer et perfectionner des vidéos avec une précision et une créativité sans compromis. Que ce soit pour des vidéos promotionnelles, des tutoriels ou des contenus multimédias complexes, je maîtrise les fonctionnalités avancées de Premiere Pro pour produire des vidéos de haute qualité, parfaitement synchronisées avec la musique, les effets sonores et les graphiques animés.",
  },

  {
    id: 7,
    logo: img7,
    stack: "Meta Ads",
    Stitle: "Pub meta",
    text: "Meta Business Suite (anciennement Facebook Ads Manager) est mon outil de prédilection pour la gestion de campagnes publicitaires sur les réseaux sociaux. Je l'utilise pour créer, optimiser et analyser des campagnes publicitaires ciblées sur Facebook et Instagram. Grâce à une stratégie data-driven, je maximise le ROI des campagnes en ajustant les audiences, les créatifs et les budgets en temps réel. Mon expertise permet de transformer des objectifs marketing en résultats concrets.",
  },

  {
    id: 8,
    logo: img8,
    stack: "After Effects",
    Stitle: "Animation",
    text: "After Effects est mon outil de prédilection pour l'animation et les effets visuels. Je l'utilise pour créer des animations fluides, des transitions dynamiques et des effets spéciaux qui donnent vie aux vidéos et aux interfaces utilisateur. Que ce soit pour des présentations captivantes, des vidéos promotionnelles ou des micro-interactions, je maîtrise les techniques avancées d'After Effects pour produire des contenus visuellement impressionnants et mémorables.",
  },
];

export default function Stack() {
  return (
    <div className="m-5 font-Manrope">
      <Title title="Mes Technologies❤️" />
      <p className="text-base text-primary-500 pb-5 pt-8">
        Plusieurs stack pour des projects a beau design. Retrouvez ci dessous
        mes prreferer et celles que j'utilise le plus.
      </p>
      <img
        src={developerbg}
        className=" w-64 absolute top-36 opacity-50 -z-10 md:hidden mx-auto"
        alt=""
      />
      <NavLink className="">
        <div className="pt-20 space-y-10">
          {data.map((data, index) => (
            <div
              className="group mt-10 relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
              key={index}
            >
              <span>
                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200" />

              <div className="space-y-4 z-10">
                <div className="flex gap-4 items-center">
                  <img className="w-16" src={data.logo} alt="" />
                  <div>
                    <h1 className="text-primary-200 font-bold text-xl">
                      {data.stack}
                    </h1>
                    <p className="text-base text-primary-400">{data.Stitle}</p>
                  </div>
                </div>
                <DotsThreeOutlineVertical
                  className="text-primary-300"
                  size={20}
                  weight="fill"
                />
                <p className="text-primary-400 md:text-base text-sm ">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </NavLink>
      <Letconnect />
      <TopScroll />
    </div>
  );
}
