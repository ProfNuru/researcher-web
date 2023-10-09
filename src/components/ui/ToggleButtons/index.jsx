import { useEffect, useState } from "react";
import Button from "../Button";
import "./ToggleButtons.css";

const ToggleButtons = ({ options }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (options && options.length > 0) {
      setValue(options[0].value);
    }
  }, [options]);

  return (
    <div className="toggle-buttons">
      {options.map((option) => (
        <Button
          key={option.value}
          text={option.label}
          toggler={true}
          active={value === option.value}
          link={`#${option.value}`}
          fxn={() => setValue(option.value)}
        />
      ))}
    </div>
  );
};

export default ToggleButtons;
