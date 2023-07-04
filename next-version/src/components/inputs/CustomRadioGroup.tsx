type CustomRadioGroupProps = {
  value: string;
  onChange: (value: string) => void;
  options: { [key: string]: string };
};

export function CustomRadioGroup({
  value,
  onChange,
  options,
}: CustomRadioGroupProps) {
  const handleClick = (userInput: string) => {
    onChange(userInput);
  };

  const optionsEntries = Object.entries(options);

  return (
    <div className="flex">
      {optionsEntries.map(([label, option]: any, idx: number) => {
        return (
          <button
            key={`prop-radio-${option}`}
            onClick={() => handleClick(label)}
            className={`px-3 py-2 text-sm font-semibold capitalize ${
              label !== value
                ? "bg-slate-200 text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                : "bg-green-600 text-white hover:bg-green-700 dark:bg-green-400 dark:text-black dark:hover:bg-green-500"
            } ${
              idx === 0
                ? "rounded-l-md"
                : idx === optionsEntries.length - 1
                ? "rounded-r-md"
                : ""
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default CustomRadioGroup;
