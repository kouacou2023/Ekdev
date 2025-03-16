import stack1 from "./image/React.png";
import stack2 from "./image/Photoshop.png";
import stack3 from "./image/Tailwind.png";
import { NavLink } from "react-router-dom";

const stacklist = [
  {
    id: 1,
    logo: stack2,
    stack: "Photoshop",
    text: "Web design",
  },

  {
    id: 2,
    logo: stack1,
    stack: "React",
    text: "App front-end",
  },
  {
    id: 3,
    logo: stack3,
    stack: "Tailwind Css",
    text: "Web Style",
  },

];


export default function Stacklist() {
  return (
    <div className="">
      <NavLink>
      <div className="lg:grid-cols-3 gap-7 grid mt-10 columns-3 ">
       {stacklist.map((stack, index) => (
          <div className="flex gap-5 bg-primary-600 pr-5 p-4 pl-5 rounded-2xl items-center" key={index}>
            <img className="w-10" src={stack.logo} />
            <div>
            <p className="text-lg md:text-xl text-primary-200 font-bold">{stack.stack}</p>
            <p className="text-base md:text-xl text-primary-500">{stack.text}</p>
            </div>
          </div>
        ))}
      </div>
      </NavLink>
    </div>
  );
}
