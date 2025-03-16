import { Star } from "@phosphor-icons/react";
import img from "./image/Logo-tesse.png";
import img1 from "./image/Logo-Financial.png";
import img2 from "./image/logo-douskab.png";
import img3 from "./image/Logo-Young-Event.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Avis = [
  {
    note: <Star size={20} weight="fill" />,
    text: "Emmanuel a développé un site web intuitif et performante pour notre startup. Son approche méthodique et sa capacité à résoudre des problèmes complexes ont été déterminantes pour la réussite du projet. Nous sommes ravis du résultat et prévoyons déjà de collaborer à nouveau avec lui pour de futures fonctionnalités.",
    img: img,
    name: "Expert Tesse",
  },
  {
    note: <Star size={20} weight="fill" />,
    text: "Emmanuel a été incroyablement professionnel et réactif tout au long du projet. Il a su comprendre nos besoins et a développé une plateforme e-commerce performante et facile à utiliser qui nous permet de faire de la vente en ligne. Son expertise en React et en intégration de paiements sécurisés a été un véritable atout. Nous recommandons vivement",
    img: img1,
    name: "DG Financial",
  },
  {
    note: <Star size={20} weight="fill" />,
    text: "Travailler avec Emmanuel a été une excellente expérience. Il a su moderniser notre packaging tout en conservant l'esprit de notre marque. Le nouveau design est épuré, et l'intégration sur le marché a permis d'augmenter nos ventes.",
    img: img2,
    name: "Douskab",
  },
  {
    note: <Star size={20} weight="fill" />,
    text: "Emmanuel a fait un travail remarquable en m'accompagnant de la création de mon identité visuelle jusqu'à la vente de mes produits. Il a également été très réactif pour répondre à nos demandes spécifiques.",
    img: img3,
    name: "Samuel Koffi",
  },
];

export default function SlideClient() {
  const settings = {
    dots: true, // Affiche les points de pagination
    infinite: true, // Boucle infinie
    slidesToShow: 2, // 1 slide visible à la fois
    slidesToScroll: 2, // 1 slide défilé à la fois
    autoplay: true, // Active l'autoplay
    speed: 30000, // Vitesse de transition
    autoplaySpeed: 50, // Intervalle de défilement automatique
    cssEase: "linear", // Transition linéaire
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 1 slide visible sur les écrans moyens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 slide visible sur les petits écrans
        },
      },
    ],
  };

  return (
    <div className="mt-12 mx-auto 2xl:min-w-[1270px] lg:max-w-[950px] md:max-w-[600px] max-w-[950px] slider-container">
      <Slider className="" {...settings}>
        {Avis.map((avis, index) => (
          <div
            key={index}
            className="p-10 font-Manrope rounded-2xl space-y-14 bg-primary-600"
          >
            <p className="text-base flex text-primary-50">
              {avis.note}
              {avis.note}
              {avis.note}
              {avis.note}
              {avis.note}
            </p>
            <p className="text-base text-primary-500">{avis.text}</p>
            <div className="flex gap-2 items-center">
              <img
                src={avis.img}
                alt={`${avis.name}'s avatar`}
                className="w-20 rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
