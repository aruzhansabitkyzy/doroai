import logo from "../../images/Shopping-cart.png";
const Logo = () => {
  return (
    <div className="flex align-middle gap-3">
      <img src={logo} width={40} height={40} />
      <p className="uppercase font-nunito font-extrabold text-md flex items-center">
        Mobi market
      </p>
    </div>
  );
};
export default Logo;
