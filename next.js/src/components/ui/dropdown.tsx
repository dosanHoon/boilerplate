import useDropdown from "@/hooks/useDropdown";
import React from "react";
import styled from "styled-components";
import Button from "./button/button";
import { DropdownContent } from "./container";
import BetweenContainer from "./layout";
import Image from "next/image";

interface DropdownProps {
  children: React.ReactNode;
  text: React.ReactNode;
  buttonStyle?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ text, children, buttonStyle }) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <DropdownContainer ref={dropdownRef}>
      <Button onClick={toggleDropdown} className="white" style={buttonStyle}>
        <BetweenContainer>
          {text}
          <Image
            src="/ui/dropdown.png"
            width={16}
            height={16}
            alt="down-arrow"
          />
        </BetweenContainer>
      </Button>
      <DropdownContent open={isOpen}>{children}</DropdownContent>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export default Dropdown;
