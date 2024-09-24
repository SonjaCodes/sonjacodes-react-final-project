import "./Toggle.css";

const Toggle = ({ toggle, handleToggle }) => {
  return (
    <div className="toggleContainer" onClick={handleToggle}>
      <div className={`toggleBtn ${!toggle ? "fahrenheit" : ""}`}>
        {toggle ? "°C" : "°F"}
      </div>
    </div>
  );
};

export default Toggle;
