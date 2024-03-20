import warning from "../images/Warning.png";
const ErrorPopup = ({ error }) => {
  return (
    <div className="absolute top-3 right-1/5 flex items-center justify-center gap-3 bg-coral px-4 py-4 rounded-2xl w-1/4 transition-all duration-200">
      <img src={warning} />
      <p className="text-white font-medium text-base">{error}</p>
    </div>
  );
};

export default ErrorPopup;
