import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BetweenContainer from "./layout";
import { IconWithText } from "./Icon";

type HeaderIconProps = {
  iconSrc: string;
  text: string;
  rightChildren?: React.ReactNode;
};

const HeaderIcon: React.FC<HeaderIconProps> = ({
  iconSrc,
  text,
  rightChildren,
}) => {
  return (
    <HeaderContainer>
      <BetweenContainer>
        <div>
          <IconWithText
            icon={iconSrc}
            text={text}
            textPosition="right"
            width={20}
            height={20}
          />
        </div>
        {rightChildren && (
          <RightChildrenContainer>{rightChildren}</RightChildrenContainer>
        )}
      </BetweenContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px;
  height: 34px;
  padding: 2px 0px;
`;

const Icon = styled(Image)`
  width: 20x;
  height: 20px;
  margin-right: 8px;
`;

const RightChildrenContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: #354350;
  font-size: 15px;
`;
export default HeaderIcon;
