import React from "react";
import styled from "styled-components";

interface ButtonProps {
  style?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: "white" | string;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  style,
  className,
  width,
}) => {
  const handleClick = () => {
    !disabled && onClick && onClick();
  };
  return (
    <ButtonWrapper
      $style={style}
      onClick={handleClick}
      $className={className}
      $disabled={disabled}
      width={width}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{
  $style?: string;
  $className?: string;
  $disabled?: boolean;
  width?: number;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 8px 14px 8px 14px;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  white-space: nowrap;
  ${(props) =>
    props.$className === "white"
      ? "background: #fff;border: 1px solid rgba(233, 234, 236, 1);"
      : "background: #11ca5a;color: #fff;"}
  ${(props) => props.$disabled && "opacity: 0.5;"}
  ${(props) => props.$style}
  ${(props) => (props.width ? `width: ${props.width}px;` : "")}
`;

export default Button;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
