import { useState } from "react";

export const useCopyDiscordName = () => {
  const [copied, setCopied] = useState(false);
  const copyDiscordUsername = async () => {
    await navigator.clipboard.writeText("torehirth");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, copyDiscordUsername };
};
