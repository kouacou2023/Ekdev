import logo from "./image/logo.gif";


export default function SplashScreen() {

  return (
    <>
      <div className=" fixed top-0 left-0 size-full items-center content-center">
        <img src={logo} alt="" />
      </div>
    </>
  );
}
