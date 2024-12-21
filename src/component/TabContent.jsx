import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const TabContent = ({ content }) => {
  const { img, name } = content;
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard");
  }
  return (
    <button
      onClick={handleNavigate}
      className="flex justify-center items-center gap-3 border border-[#D8DAE5] rounded-lg py-4 w-full md:w-[446px] hover:border-blue-400 transform transition-all duration-300 ease-in-out"
    >
      <img src={img} alt={name} className="w-6 h-6" />
      <span className="text-lg font-semibold text-darkGray">{name}</span>
    </button>
  );
};
TabContent.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default TabContent;
