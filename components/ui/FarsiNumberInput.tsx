import React, { useState } from "react";

const FarsiNumberInput: React.FC = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const inputValue = e.target.value.replace(
      /\d/g,
      (digit) => persianNumbers[parseInt(digit, 10)]
    );
    setValue(inputValue);
  };

  return (
    <input
      value={value}
      onChange={handleInput}
      type="text"
      id="farsi-number"
      name="farsi-number"
      placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹" // Placeholder with Farsi numerals for guidance
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 text-right"
    />
  );
};

export default FarsiNumberInput;
