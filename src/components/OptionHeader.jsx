import arrow from "../images/Arrow.png";
import { useNavigate } from "react-router-dom";
const OptionHeader = ({ onClick, text }) => {
  const navigate = useNavigate();
  return (
    <div className="pl-7 w-1/2">
      <div className="flex gap-56 mt-5">
        <span
          className="font-medium text-lg flex gap-3 cursor-pointer font-nunito"
          onClick={() => navigate("/")}
        >
          <span className="inline-block w-10 h-8 bg-gray-100 rounded-2xl">
            <img src={arrow} className="pt-3 pl-3" />
          </span>
          Назад
        </span>
        <span className="font-bold text-xl font-nunito">{text}</span>
      </div>
    </div>
  );
};
export default OptionHeader;
