import close from "../../images/Close.png";
import { useModal } from "../../context/ModalContext";

const Popup = ({ children }) => {
  const { closeModal } = useModal();
  return (
    <div
      className={`px-7 py-7 z-10 backdrop-opacity-30 absolute top-1/4 left-1/3 bg-white w-1/3 min-h-3/5 rounded-md shadow-md shadow-slate-300`}
    >
      {children}
    </div>
  );
};

export default Popup;
