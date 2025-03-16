import { NavLink } from "react-router-dom";


export default function Projectcart(props) {
  const { id, category, title, image } = props.data;
  return (
    <div className="">
      <NavLink>
      <img className=" rounded-3xl mb-4" src={image} alt="" />
      <p className=" text-primary-100 md:text-xl text-lg">{category}</p>
      <h3 className=" md:text-3xl text-2xl font-light text-primary-500">{title}</h3>
      </NavLink>
    </div>
  );
}
