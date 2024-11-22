import { ControlSelectorProps, UnitsModel } from "@/types";
import { CONTROL_OPTIONS } from "@/utils/constants";
import { extractFullUnitNames } from "@/utils/reusables";
import { FC, useMemo } from "react";
import SelectComponent from "./controllers/SelectComponent";

const ControlSelector: FC<ControlSelectorProps> = ({
  selectedValue,
  setSelectedValue,
  title,
}) => {
  const options = useMemo(() => {
    if (title === "units") {
      return CONTROL_OPTIONS?.[title]?.map((option) => ({
        label: extractFullUnitNames(option as UnitsModel),
        value: option,
      }));
    } else {
      return CONTROL_OPTIONS?.[title]?.map((option) => ({
        label: option?.toUpperCase(),
        value: option,
      }));
    }
  }, [title]);

  return (
    <SelectComponent
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      title={title}
      options={options as any}
    />
  );
};

export default ControlSelector;
