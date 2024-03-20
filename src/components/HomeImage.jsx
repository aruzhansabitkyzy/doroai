import frontImg from "../images/frontImg.png";
import cart from "../images/Shopping-cart.png";
import Logo from "./ui/Logo";
const HomeImage = () => {
  return (
    <div className="w-1/2 relative">
      <img src={frontImg} width="100%" height="100vh" />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white opacity-60"></div>
      <div className="absolute top-1/4 left-1/3">
        <img src={cart} className="p-0" />
        <Logo />
      </div>
    </div>
  );
};
export default HomeImage;
