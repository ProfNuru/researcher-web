import { useEffect, useState } from "react";
import "./SelectInput.css";

const SelectInput = ({ labelId, label, options, initialValue }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  return (
    <div className="select-form">
      <label htmlFor={labelId}>{`${label}:`}</label>
      <select
        name={labelId}
        id={labelId}
        value={value}
        onChange={onChangeValue}
      >
        <option value="">{`~~ ${label} ~~`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
