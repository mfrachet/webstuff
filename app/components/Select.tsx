import {
  Select as RSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

export interface SelectProps {
  label: string;
  name: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onValueChange?: (str: string) => void;
}

export const Select = ({
  name,
  options,
  label,
  value,
  onValueChange,
}: SelectProps) => {
  return (
    <RSelect name={name} value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((opt) => (
            <SelectItem value={opt.value} key={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </RSelect>
  );
};
