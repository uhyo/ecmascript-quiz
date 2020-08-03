export type QuestionType = "text" | "code";

export type Question = {
  /**
   * ID of spec section which this question belongs to.
   */
  sec: string;
  type: QuestionType;
  title: string;
  text: string;
  options: string[];
};

/**
 * Special markup for blank.
 */
export const blankMark = "(XXX)";
