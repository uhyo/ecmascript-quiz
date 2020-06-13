import styled from "styled-components";
import { Question } from "~/data/question";
import React from "react";
import { convertBlank } from "./logic/blank";

type Props = {
  question: Question;
};

export const QuestionPage: React.FC<Props> = ({ question }) => {
  return (
    <Wrapper>
      <h1>{question.title}</h1>
      {question.type === "text" ? (
        <p>{convertBlank(question.text)}</p>
      ) : (
        <pre>
          <code>{convertBlank(question.text)}</code>
        </pre>
      )}
      <Options>
        {question.options.map((o, index) => (
          <li key={index}>
            <button type="button">
              {question.type === "text" ? o : <code>{o}</code>}
            </button>
          </li>
        ))}
      </Options>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & > h1 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & > p {
    font-family: serif;
  }
`;

const Options = styled.ul`
  margin-top: 8px;
  font-family: serif;

  & > li {
    padding: 4px;
    border-radius: 6px;
    border: 1px solid #bbbbbb;

    button {
      display: block;
      width: 100%;
    }
  }

  & > li + li {
    margin-top: 10px;
  }
`;
