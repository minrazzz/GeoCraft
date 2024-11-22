import { SelectComponentProps } from "@/types";
import { FC, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectComponent: FC<SelectComponentProps> = ({
  selectedValue,
  setSelectedValue,
  title,
  options,
}) => {
  const handleValueChange = useCallback((value: string) => {
    setSelectedValue(value as any);
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-[7px]">
      <label>{title}</label>
      <Select value={selectedValue} onValueChange={handleValueChange}>
        <SelectTrigger className="">
          <SelectValue placeholder={selectedValue.toUpperCase()} />
        </SelectTrigger>
        <SelectContent className="w-[100%] bg-white z-10">
          {options &&
            options?.map((option, idx) => (
              <SelectItem key={idx} value={option?.value}>
                {option?.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponent;
