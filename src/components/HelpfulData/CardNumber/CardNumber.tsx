import { useState } from "react";

import { Input } from "@src/components";
import { convertStrToHyphenStr } from "@src/utils";

export function CardNumber({ name }: { name: string }) {
  const lsValue = localStorage.getItem(convertStrToHyphenStr(name));

  const [value, setValue] = useState(lsValue || "");
  const [buttonText, setButtonText] = useState("Copy");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.replaceAll(" ", ""));

      setButtonText("✅");
      setIsButtonDisabled(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
        setButtonText("Copy");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Input name={name} value={value} isNumber setValue={setValue} />
      <button
        className="w-16 pt-1 rounded-md bg-gray-800 text-lg font-bold text-white shadow-sm hover:rounded-none h-full"
        onClick={handleCopy}
        disabled={isButtonDisabled}
      >
        {buttonText}
      </button>
    </>
  );
}
