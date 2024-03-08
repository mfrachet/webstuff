export interface SelectProps {
  id?: string;
  name: string;
  options: Array<{ label: string; value: string }>;
}

export const Select = ({ name, options }: SelectProps) => {
  return (
    <select
      name={name}
      className="h-10 rounded-lg border-slate-200 px-2 border w-60"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
