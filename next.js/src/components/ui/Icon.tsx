import Image from "next/image";
import React from "react";
import styled from "styled-components";

type IconProps = {
  icon: string;
  text: string;
  textPosition?: "top" | "left" | "right" | "down";
  width?: number;
  height?: number;
  onClick?: () => void;
};

const IconWithText: React.FC<IconProps> = ({
  icon,
  text,
  textPosition = "right",
  width = 16,
  height = 16,
  onClick,
}) => {
  return (
    <IconContainer $position={textPosition} onClick={onClick}>
      <Icon src={icon} alt={`${text} Icon`} width={width} height={height} />
      <IconText $position={textPosition}>{text}</IconText>
    </IconContainer>
  );
};

const Icon = styled(Image)`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const IconContainer = styled.div<{ $position: string }>`
  display: flex;
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row" : "column"};
  align-items: center;
`;

const IconText = styled.span<{ $position: string }>`
  // margin-top: ${({ $position }) => $position === "top" && "10px"};
  margin-left: ${({ $position }) => $position === "right" && "8px"};
  // margin-right: ${({ $position }) => $position === "right" && "10px"};
  margin-top: ${({ $position }) => $position === "down" && "4px"};
`;

export { IconWithText };
