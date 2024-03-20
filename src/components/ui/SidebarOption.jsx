import arrowRight from "../../images/arrow-right.png";
import { useModal } from "../../context/ModalContext";
const SidebarOption = ({ image, text, link, active, onClick }) => {
  return (
    <div
      className={`rounded-md px-5 py-3 flex justify-between mb-4 align-middle items-center cursor-pointer ${
        active ? "bg-neutralGrey" : "bg-white"
      }`}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-md bg-maine p-1 flex">
          <img src={image} />
        </div>
        <p className="text-newBlack font-bold">{text}</p>
      </span>
      <span>
        <img src={arrowRight} />
      </span>
    </div>
  );
};
export default SidebarOption;
