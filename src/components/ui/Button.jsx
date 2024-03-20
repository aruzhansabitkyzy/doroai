const Button = ({ text, disable, error, onClick, style }) => {
  return (
    <button
      className={`${style} h-10 px-5 py-2 rounded-3xl text-white font-medium cursor-pointer ${
        disable || error ? "bg-grey" : "bg-maine cursor-pointer"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
