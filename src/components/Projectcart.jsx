// Importation des composants nécessaires pour la navigation et la validation des props
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Définition du composant Projectcart qui affiche une carte de projet
export default function Projectcart(props) {
  // Extraction des données du projet depuis les props
  // - category : la catégorie du projet (ex: "WEB DESIGN")
  // - title : le titre du projet
  // - image : l'URL de l'image du projet
  // - slug : l'identifiant unique du projet pour la navigation
  const { category, title, image, slug } = props.data;

  return (
    // Conteneur principal de la carte
    <div className="">
      {/* Lien de navigation vers la page de détails du projet */}
      <NavLink to={`/projets/${slug}`}>
        {/* Image du projet avec des styles pour l'apparence */}
        <img className="rounded-3xl mb-4" src={image} alt="" />
        {/* Affichage de la catégorie du projet */}
        <p className="text-primary-100 md:text-xl text-lg">{category}</p>
        {/* Affichage du titre du projet */}
        <h3 className="md:text-3xl text-2xl font-light text-primary-500">
          {title}
        </h3>
      </NavLink>
    </div>
  );
}

// Validation des props avec PropTypes
// Cela permet de vérifier que les données reçues sont du bon type
Projectcart.propTypes = {
  // L'objet data doit contenir les propriétés suivantes
  data: PropTypes.shape({
    // La catégorie du projet (obligatoire, doit être une chaîne de caractères)
    category: PropTypes.string.isRequired,
    // Le titre du projet (obligatoire, doit être une chaîne de caractères)
    title: PropTypes.string.isRequired,
    // L'URL de l'image (obligatoire, doit être une chaîne de caractères)
    image: PropTypes.string.isRequired,
    // L'identifiant unique du projet (obligatoire, doit être une chaîne de caractères)
    slug: PropTypes.string.isRequired,
  }).isRequired, // L'objet data lui-même est obligatoire
};
