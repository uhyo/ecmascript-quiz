import React from "react";
import { Question, blankMark } from "./data/question";
import { QuestionPage } from "./pages/Question";

const testQ: Question = {
  type: "text",
  title: "Fill the blank with the correct answer.",
  text: `The first edition of the ECMAScript specification was published in ${blankMark}.`,
  options: ["1994", "1997", "2001", "2015"],
};

export const App: React.FC = () => {
  return <QuestionPage question={testQ} />;
};
