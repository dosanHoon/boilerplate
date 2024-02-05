import useDropdown from "@/hooks/useDropdown";
import React from "react";
import styled from "styled-components";

import Button from "../button/button";
import { DropdownContent } from "../container";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

interface SelectMenuProps {
  children: React.ReactNode;
  text: React.ReactNode;
  width?: number;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ text, children, width }) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <Container ref={dropdownRef}>
      <Button className="white" onClick={toggleDropdown}>
        {text}
      </Button>
      <DropdownContent open={isOpen} width={width}>
        {children}
      </DropdownContent>
    </Container>
  );
};

export default SelectMenu;
