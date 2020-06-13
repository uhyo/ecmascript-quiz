import { blankMark } from "~/data/question";
import { Blank } from "../components/Blank";
import React from "react";

/**
 * Convert blank markers in text to the Blank component.
 */
export const convertBlank = (text: string): React.ReactNode[] => {
  const result = [];
  for (const [idx, part] of text.split(blankMark).entries()) {
    if (idx !== 0) {
      result.push(<Blank key={`blank-${idx}`} />);
    }
    result.push(part);
  }
  return result;
};
