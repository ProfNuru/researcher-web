import { useEffect, useState } from "react";
import Button from "../Button";
import "./ToggleButtons.css";

const ToggleButtons = ({ options, updateValue, initialValue }) => {
  const [value, setValue] = useState("");

  const changeValue = (v) => {
    updateValue(initialValue.label, v);
  };

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue.value);
    } else if (options && options.length > 0) {
      setValue(options[0].value);
    }
  }, [options, initialValue]);

  return (
    <div className="toggle-buttons">
      {options.map((option) => (
        <Button
          key={option.value}
          text={option.label}
          toggler={true}
          active={value === option.value}
          link={`#${option.value}`}
          fxn={() => changeValue(option.value)}
        />
      ))}
    </div>
  );
};

export default ToggleButtons;
