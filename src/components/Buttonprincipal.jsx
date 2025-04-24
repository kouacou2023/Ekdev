import { ArrowRight } from "@phosphor-icons/react";

export default function Buttonprincipal({ title, url }) {
  return (
    <div className="font-Manrope">
      <button className="group hover:border-none p-3 md:w-auto w-full hover:bg-zinc-950 bg-transparent flex items-center justify-center space-x-3 border border-primary-100 rounded-2xl">
        <a
          className="group-hover:text-primary-500 text-primary-500 font-medium text-xl "
          href={url}
          target="_blank"
          rel=""
        >
          {title}
        </a>
        <ArrowRight
          className="group-hover:transition group-hover:ease-linear group-hover:delay-150 group-hover:translate-x-1 group-hover:scale-110 group-hover:duration-300 text-primary-500 group-hover:text-primary-100"
          size={20}
          weight="fill"
        />
      </button>
    </div>
  );
}
