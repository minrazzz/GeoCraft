import { FC } from "react";
import { Input } from "../ui/input";
import { InputProps } from "@/types";

const InputComponent: FC<InputProps> = ({
  value,
  onChange,
  type,
  id,
  title,
  error,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-y-[7px]">
      <label htmlFor="" className="capitalize">
        {title}
      </label>
      <div className="w-full">
        <Input
          id={id}
          type={type || "text"}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.id, Number(e.target.value))
          }
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </div>
    </div>
  );
};

export default InputComponent;
