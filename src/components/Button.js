const Button = ({ text, className, onClick }) => {
  return (
    <div>
      <button
        className={`${className} px-4 py-2 text-white rounded-2xl hover:bg-blue-700 `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
