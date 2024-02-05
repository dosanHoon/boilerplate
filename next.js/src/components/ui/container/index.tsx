import styled from "styled-components";

export const DropdownContent = styled.div<{ open: boolean; width?: number }>`
  z-index: 500;
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  box-shadow: 0px 0px 10px 0px rgba(31, 46, 61, 0.1);
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 12px 0px 8px;
  border-radius: 8px;
  margin-top: 10px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
