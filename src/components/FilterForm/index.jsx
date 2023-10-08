import { publicationTypes, publicationYears } from "../../../constants";
import SelectInput from "../ui/SelectInput";
import "./FilterForm.css";

const FilterForm = () => {
  const submitFilterForm = (e) => {
    e.preventDefault();
  };
  return (
    <form className="filter-form" onSubmit={submitFilterForm}>
      <SelectInput
        labelId="publicationType"
        label="Publication type"
        options={publicationTypes}
        initialValue={publicationTypes[0].value}
      />
      <SelectInput
        labelId="publicationYear"
        label="Year"
        options={publicationYears}
        initialValue={publicationYears[0].value}
      />
    </form>
  );
};

export default FilterForm;
