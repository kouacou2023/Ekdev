import { NavLink } from "react-router-dom";
import profil from "./image/me.jpg";
import {
  Stack,
  House,
  UserCircle,
  Network,
  EnvelopeSimple,
  Copyright,
  FacebookLogo,
  WhatsappLogo,
  TiktokLogo,
  LinkedinLogo,
  Circle,
  TextOutdent,
  XCircle,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function Sidebar() {
  const [OpenMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    SetOpenMenu(!OpenMenu);
  };

  return (
    <div className="font-Manrope md:fixed md:top-0 md:left-0 md:bg-black">
      <div className=" flex md:grid md:columns-3 md:text-center justify-between p-5 items-center md:h-svh w-auto md:border-r md:border-primary-300 md:p-5">
        <div className="flex items-center justify-center gap-2 md:block">
          <NavLink to="/">
            <img
              className="w-14 lg:w-40 md:w-24 rounded-xl md:mb-3 lg:mb-3"
              src={profil}
              alt=""
            />
          </NavLink>
          <div className="flex w-40 lg:flex lg:items-center lg:gap-3 md:p-1 lg:w-full md:w-24 md:gap-1 items-center gap-3 bg-primary-100 lg:p-0 p-0 lg:rounded-full rounded-full font-medium md:text-center text-center">
            <Circle className=" text-primary-200" size={21} weight="fill" />
            <h3 className="text-gray-200 lg:text-base text-base md:text-sm">
              Disponible
            </h3>
          </div>
        </div>

        <div className="">
          <div className="md:block hidden w-full left-0 pt-10 space-y-4 text-base">
            <NavLink
              to="/"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <House
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className=" lg:block md:hidden">Home</span>
            </NavLink>

            <NavLink
              to="/about"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <UserCircle
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className="lg:block md:hidden">About</span>
            </NavLink>

            <NavLink
              to="/projets"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <Network
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className="lg:block md:hidden">Project</span>
            </NavLink>

            <NavLink
              to="/stack"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <Stack
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className="md:hidden lg:block">Stack</span>
            </NavLink>

            <NavLink
              to="/contacts"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <EnvelopeSimple
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className="md:hidden lg:block">Contacts</span>
            </NavLink>

            <NavLink
              to="/licence"
              exact="true"
              className={
                ({ isActive }) =>
                  isActive
                    ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                    : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
              }
            >
              <Copyright
                size={21}
                weight="fill"
                className="transition duration-300 ease-out hover:scale-110"
              />
              <span className="md:hidden lg:block">Licences</span>
            </NavLink>
          </div>
        </div>
        <div onClick={toggleMenu} className=" text-primary-200 md:hidden">
          {OpenMenu ? (
            <XCircle size={24} weight="fill" />
          ) : (
            <TextOutdent size={24} weight="fill" />
          )}

          {OpenMenu && (
            <div className="md:block absolute p-5 bg-black w-full left-0 mt-8 space-y-4 text-base">
              <NavLink
                to="/"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <House
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className=" lg:block md:hidden">Home</span>
              </NavLink>

              <NavLink
                to="/about"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <UserCircle
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className="lg:block md:hidden">About</span>
              </NavLink>

              <NavLink
                to="/projets"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <Network
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className="lg:block md:hidden">Project</span>
              </NavLink>

              <NavLink
                to="/stack"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <Stack
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className="md:hidden lg:block">Stack</span>
              </NavLink>

              <NavLink
                to="/contacts"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <EnvelopeSimple
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className="md:hidden lg:block">Contacts</span>
              </NavLink>

              <NavLink
                to="/licence"
                exact="true"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "flex lg:w-full lg:ml-0 md:w-10 md:ml-6 gap-3 bg-primary-300 p-2 rounded-xl text-primary-200 hover:text-primary-200 font-medium duration-100" // Styles pour lien actif
                      : "flex lg:ml-2 md:ml-8 gap-3 ml-2 text-gray-500 duration-100 hover:text-primary-50" // Styles pour lien inactif
                }
              >
                <Copyright
                  size={21}
                  weight="fill"
                  className="transition duration-300 ease-out hover:scale-110"
                />
                <span className="md:hidden lg:block">Licences</span>
              </NavLink>
            </div>
          )}
        </div>

        <div className="md:block lg:flex lg:ml-0 md:ml-8 hidden justify-between items-center">
          <NavLink
            to="https://www.facebook.com/share/15yR8RdTRc/?mibextid=wwXIfr"
            target="-blank"
            className=" text-gray-500 hover:text-primary-100 hover transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500 mr-5"
          >
            <FacebookLogo size={21} weight="fill" />
          </NavLink>
          <NavLink
            to="http://www.tiktok.com/@kouacouemmanuel"
            target="-blank"
            className=" text-gray-500 hover:text-primary-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500 mr-5"
          >
            <TiktokLogo size={21} weight="fill" />
          </NavLink>
          <NavLink
            to="https://wa.me/0788953014"
            target="-blank"
            className=" text-gray-500 hover:text-primary-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500 mr-5"
          >
            <WhatsappLogo size={21} weight="fill" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/emmanuel-kouacou-9550b42a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="-blank"
            className=" text-gray-500 hover:text-primary-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500 mr-5"
          >
            <LinkedinLogo size={21} weight="fill" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
