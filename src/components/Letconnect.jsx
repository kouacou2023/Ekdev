import { NavLink } from "react-router-dom";

export default function Letconnect() {
  return (
    <div className="font-Manrope mt-20">
      <NavLink to="https://wa.me/2250788953014">
        <h1 className="text-4xl transition-all duration-1000 lg:text-8xl md:text-6xl group md:hover:text-primary-100 font-extrabold text-primary-500 text-center">
          Contactez
          <span className="text-primary-100 transition-all duration-1000 md:group-hover:text-primary-500">
            -Moi!
          </span>
        </h1>
      </NavLink>
    </div>
  );
}
