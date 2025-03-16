import { useParams } from "react-router-dom";
import { projectlist } from "../components/Projectlist";
import { ArrowLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import Projectcart from "../components/Projectcart";
import Buttonprincipal from "../components/Buttonprincipal";
import { useState } from "react";

export default function ProjectDetails() {
  // État pour limiter le nombre de projets visibles
  const [visibleProjects] = useState(2);

  // Récupère le slug de l'URL
  const { slug } = useParams();

  // Trouve le projet correspondant au slug
  const project = projectlist.find((p) => p.slug === slug);

  // Si le projet n'existe pas, affiche un message d'erreur
  if (!project) {
    return <p>Projet introuvable</p>;
  }

  return (
    <div className="m-5 space-y-5 font-Manrope">
      <NavLink to="/projets" className="bg-none group flex items-center gap-2">
        <ArrowLeft
          className="group-hover:text-primary-100 text-primary-400"
          size={25}
          weight="fill"
        />
        <p className="group-hover:text-primary-100 text-sm text-primary-400">
          Retour aux projets
        </p>
      </NavLink>
      <h1 className="text-5xl pt-4 pb-7 md:text-8xl text-primary-500 font-bold">
        {project.title}
      </h1>
      <div className="md:flex pb-7 space-y-3 justify-between">
        <div className="flex items-center gap-3">
          <project.icon3 className="text-primary-50" size={20} weight="fill" />
          <p className="text-xl font-light text-primary-500">{project.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <project.icon1 className="text-primary-50" size={20} weight="fill" />
          <p className="text-xl font-light text-primary-500">4 {project.day}</p>
        </div>
        <div className="flex items-center gap-3">
          <project.icon2 className="text-primary-50" size={20} weight="fill" />
          <p className="text-xl font-light text-primary-500">
            {project.category}
          </p>
        </div>
      </div>
      <img className="rounded-3xl " src={project.image} alt={project.title} />
      <p className="text-primary-400 text-sm md:text-2xl pt-7">
        {project.details}
      </p>
      <div className="pt-7">
        <Buttonprincipal url={project.url} title="VISITE" />
      </div>

      <div>
        <h1 className="text-4xl pt-20 pb-7 md:text-8xl text-primary-500 font-bold">
          Autres Projets
        </h1>
        <div className="grid pb-5 md:grid-cols-2 gap-10">
          {projectlist
            .filter((p) => p.slug !== slug) // Exclut le projet actuel
            .slice(0, visibleProjects) // Limite le nombre de projets affichés
            .map((projectItem) => {
              // projectItem est bien défini ici
              console.log("Projet :", projectItem); // Vérifie les données du projet
              return (
                <NavLink
                  to={`/projets/${projectItem.slug}`} // Utilise projectItem.slug
                  key={projectItem.slug} // Clé unique pour React
                >
                  <Projectcart data={projectItem} />
                </NavLink>
              );
            })}
        </div>
        <NavLink to="/projets">
          <Buttonprincipal title="VOIR PLUSIEURS PROJECTS" />
        </NavLink>
      </div>
    </div>
  );
}
