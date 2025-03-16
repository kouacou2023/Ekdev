import { PhosphorLogo,GoogleLogo,Image } from "@phosphor-icons/react";
import SouTitle from "../components/SouTitle";
import Title from "../components/Title";
import Letconnect from "../components/Letconnect";


export default function Licence() {
  return (
    <div className="m-5">
      <Title title="Licences" />
      <div className="pt-20 space-y-7">
        <SouTitle Stitle="Icons" />
        <div className="flex gap-3">
          <PhosphorLogo size={24} className="text-primary-500" weight="fill" />
          <h1 className="text-primary-400 md:text-xl text-base">Phosphor</h1>
        </div>
      </div>

      <div className="pt-20 space-y-7">
        <SouTitle Stitle="Typographie" />
        <div className="flex gap-3">
          <GoogleLogo size={24} className="text-primary-500" weight="fill" />
          <h1 className="text-primary-400  md:text-xl text-base">Google Font</h1>
        </div>
      </div>

      <div className="pt-20 space-y-7">
        <SouTitle Stitle="Photos" />
        <div className="flex gap-3">
          <Image size={24} className="text-primary-500" weight="fill" />
          <h1 className="text-primary-400 md:text-xl text-base">Freepik</h1>
        </div>
      </div>

      <Letconnect/>
      
    </div>
  );
}
