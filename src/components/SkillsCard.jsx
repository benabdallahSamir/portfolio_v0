import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = ({ icon }) => {
  return (
    <div className="SkillsCard flex-ac">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SkillsCard;
