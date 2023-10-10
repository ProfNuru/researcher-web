import { publicationTypes, publicationYears } from "../../../constants";
import {
  useStateContext,
  useUpdateStateContext,
} from "../../store/StateContext";
import SelectInput from "../ui/SelectInput";
import "./FilterForm.css";

const FilterForm = () => {
  const { publicationType, publicationYear } = useStateContext();
  const updateToggleState = useUpdateStateContext();

  const submitFilterForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="filter-form" onSubmit={submitFilterForm}>
      <SelectInput
        changeValue={updateToggleState}
        labelId="publicationType"
        label="Publication type"
        options={publicationTypes}
        initialValue={{ label: "publicationType", value: publicationType }}
      />
      <SelectInput
        changeValue={updateToggleState}
        labelId="publicationYear"
        label="Publication year"
        options={publicationYears}
        initialValue={{ label: "publicationYear", value: publicationYear }}
      />
    </form>
  );
};

export default FilterForm;
