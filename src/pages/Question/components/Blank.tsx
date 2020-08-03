import styled from "styled-components";
import React from "react";

const BlankStyle = styled.span`
  display: inline-block;
  width: 6ex;
  height: calc(1.2em + 8px);
  vertical-align: -7px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddcccc;
  color: transparent;
  text-indent: -10ex;
  overflow: hidden;
  user-select: none;
  background-image: repeating-linear-gradient(
    120deg,
    transparent,
    transparent 6px,
    rgba(255, 0, 0, 0.05) 6px,
    rgba(255, 0, 0, 0.05) 12px
  );
`;

export const Blank: React.FC = () => <BlankStyle>(blank)</BlankStyle>;
