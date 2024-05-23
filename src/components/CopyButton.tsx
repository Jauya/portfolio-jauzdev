import { Check, Copy } from "react-feather";
import { useState } from "react";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  return (
    <button
      className={`text-[#bfbebf] dark:text-[#1e1f1e] text-xl rounded-2xl flex justify-center items-center gap-2 px-5 py-3 hover:bg-[#292a2a] dark:hover:bg-[#d9dade] ${
        copySuccess ? "bg-[#292a2a] dark:bg-[#e3e6e6]" : "bg-[#262727] dark:bg-[#eff1f1]"
      }`}
      onClick={copyToClipboard}
    >
      {copySuccess ? (
        <>
          Copiado <Check width={18} />
        </>
      ) : (
        <>
          Copiar email <Copy width={18} />
        </>
      )}
    </button>
  );
}
