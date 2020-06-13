export type QuestionType = "text" | "code";

export type Question = {
  type: QuestionType;
  title: string;
  text: string;
  options: string[];
};

/**
 * Special markup for blank.
 */
export const blankMark = "(XXX)";
