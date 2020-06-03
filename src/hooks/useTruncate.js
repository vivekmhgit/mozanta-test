import { useState } from "react";

export const useTruncate = (text) => {
  let truncText = useState(text);
  if (text.length > 25) {
    truncText = text.substring(0, 24) + "...";
    return truncText;
  }
  return truncText;
};
