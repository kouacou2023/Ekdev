import { Copyright } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="text-center mt-16 md:mt-20 mb-5">
      <div className="md:flex md:items-center md:text-center md:justify-between">
        <div className="flex items-center text-center justify-center gap-3">
          <Copyright size={25} weight="fill" className="text-primary-300" />
          <h1 className="text-primary-300 text-lg">
            Copyright 2024. Tous droits
          </h1>
        </div>
        <h2 className="text-primary-300 text-lg md:pt-0 pt-3">
          Réservés Réalisé par EkDev.
        </h2>
      </div>
    </div>
  );
}
