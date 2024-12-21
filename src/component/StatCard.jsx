import PropTypes from 'prop-types';
const StatCard = ({value,label}) => {
  return (
    <div className="flex flex-col items-center">
    <span className="font-bold text-customBlue text-lg">{value}</span>
    <span className="text-sm text-darkGray font-normal">{label}</span>
  </div>
  )
}

StatCard.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string, 
  };


export default StatCard