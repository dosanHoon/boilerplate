import React from "react";
import styled from "styled-components";

interface DividerProps {
  direction: "vertical" | "horizontal";
}

const Divider = styled.div<DividerProps>`
  width: 1px;
  height: 1px;
  background: #f4f5f5;
  position: relative;
  margin: 0 auto;
  ${({ direction }) => direction == "horizontal" && "width: 100%;"}
  ${({ direction }) => direction == "vertical" && "height: 100%;"}
`;

export default Divider;
