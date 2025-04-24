import { NavLink } from "react-router-dom";
import Buttonprincipal from "../components/Buttonprincipal";
import Letconnect from "../components/Letconnect";
import SouTitle from "../components/SouTitle";
import Title from "../components/Title";
import TopScroll from "../components/TopScroll";

import {
  GraduationCap,
  MapPinSimple,
  DotsThreeOutlineVertical,
  Certificate,
  Student,
  Devices,
  DevToLogo,
  CursorClick,
} from "@phosphor-icons/react";

export default function About() {
  return (
    <div className="font-Manrope m-5">
      <div className=" space-y-10">
        <Title title="Faites connaissance avec moi..." />
        <p className=" text-sm md:text-base text-primary-500">
          Bonjour, Emmanuel Kouacou et je suis plus qu'un simple concepteur de
          sites web ; je suis un compteur d'histoires numériques. J'ai toujours
          été captivée par l'art de la conception de sites web, application, web
          design et mon parcours dans ce domaine a été tout à fait exaltant. Mon
          objectif est de créer des projects qui ne se contentent pas d'être
          beaux, mais qui fonctionnent également de manière transparente, en
          offrant une expérience utilisateur exceptionnelle.
        </p>
      </div>

      <div className="flex items-center mt-10 justify-between">
        <div className="flex md:mb-0">
          <MapPinSimple className="text-primary-50" size={24} weight="fill" />
          <p className="text-base text-primary-500"> Abidjan, Marcory</p>
        </div>
        <p className="text-base md:block md:text-xs text-primary-500">
          .............................................
        </p>
      </div>

      <div className="mt-14">
        <SouTitle Stitle="Education" />
        <div className="flex gap-2 pt-14">
          <Certificate size={20} weight="fill" className="text-primary-500" />
          <div>
            <h1 className="text-base text-primary-200 font-bold">
              BTS informatique Developpeur d'application
            </h1>
            <p className="text-base text-primary-500">
              EUROF deux plateaux mycari,{" "}
              <span className="font-bold text-primary-100">2021</span>
            </p>
          </div>
        </div>

        <div className="pt-5">
          <DotsThreeOutlineVertical
            className="text-primary-400"
            size={20}
            weight="fill"
          />
        </div>

        <div className="flex gap-2 pt-5">
          <GraduationCap size={20} weight="fill" className="text-primary-500" />
          <div>
            <h1 className="text-base text-primary-200 font-bold">
              BAC serie D
            </h1>
            <p className="text-base text-primary-500">
              Lycee Departemental roi bonzou 2,{" "}
              <span className="font-bold text-primary-100">2019</span>
            </p>
          </div>
        </div>

        <div className="pt-5">
          <DotsThreeOutlineVertical
            className="text-primary-400"
            size={20}
            weight="fill"
          />
        </div>

        <div className="flex gap-2 pt-5">
          <Student size={20} weight="fill" className="text-primary-500" />
          <div>
            <h1 className="text-base text-primary-200 font-bold">BEPC</h1>
            <p className="text-base text-primary-500">
              Collège moderne abengourou,{" "}
              <span className="font-bold text-primary-100">2016</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-base text-primary-500">
          ..............................................................................................
        </p>
      </div>

      <div className="mt-14 space-y-10">
        <SouTitle Stitle="Stack" />
        <p className="text-sm text-primary-500">
          Ma boîte à outils techniques comprend des compétences en Framer,
          Figma, HTML, CSS, JavaScript, react, tailwind css photoshop,
          illustrator, premiere pro et divers logiciels de conception. J'ai
          également une bonne connaissance de la conception de sites Web
          réactifs, ce qui me permet de m'assurer que les sites Web que je crée
          ont une apparence et un fonctionnement irréprochables sur tous les
          appareils.
        </p>
        <div className="md:flex md:justify-between md:items-center">
          <p className="text-base hidden md:block text-primary-500">
            .......................................................................
          </p>
          <NavLink to="/stack">
            <Buttonprincipal url="" title="VOIR PLUSIEURS STACK" />
          </NavLink>
        </div>
      </div>

      <div className="mt-14">
        <SouTitle Stitle="Experiences" />
        <div className="flex gap-2 pt-14">
          <DevToLogo className="text-primary-500" size={20} weight="fill" />
          <div>
            <h1 className="text-base md:text-xl text-primary-200 font-bold">
              Developpeur Junior Front
            </h1>
            <p className="text-base md:text-lg text-primary-500">
              PERFORMANCE K ,
              <span className="font-bold text-primary-100">2022</span>
            </p>
          </div>
        </div>

        <div className="pt-2">
          <DotsThreeOutlineVertical
            className="text-primary-400"
            size={20}
            weight="fill"
          />
        </div>

        <div className="flex gap-2 pt-5">
          <Devices className="text-primary-500" size={20} weight="fill" />
          <div>
            <h1 className="text-base md:text-xl text-primary-200 font-bold">
              Community Manager
            </h1>
            <p className="text-base md:text-lg text-primary-500">
              PERFORMANCE K ,
              <span className="font-bold text-primary-100">2023</span>
            </p>
          </div>
        </div>

        <div className="pt-2">
          <DotsThreeOutlineVertical
            className="text-primary-400"
            size={20}
            weight="fill"
          />
        </div>

        <div className="flex gap-2 pt-5">
          <CursorClick className="text-primary-500" size={20} weight="fill" />
          <div>
            <h1 className="text-base md:text-xl text-primary-200 font-bold">
              Web designer Infographiste
            </h1>
            <p className="text-base md:text-lg text-primary-500">
              PERFORMANCE K ,
              <span className="font-bold text-primary-100">2024</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-base text-primary-500">
          ..............................................................................................
        </p>
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
