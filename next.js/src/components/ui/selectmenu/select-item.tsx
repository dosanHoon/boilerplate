import React from "react";
import styled from "styled-components";

const Container = styled.div<{ $selected?: boolean }>`
  padding: 8px 16px 8px 16px;
  &:hover {
    background: rgba(31, 46, 61, 0.03);
  }
  & {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    text-align: left;
    ${({ $selected }) => $selected && `color: #11CA5A;`}
  }
`;

interface SelectItem {
  label: string;
  value: number | string;
}

interface SelectMenuProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export const _renderSelectItem = (
  items: SelectItem[],
  value: string | number,
  onSelect: (item: SelectItem) => () => void
) => {
  return items.map((column) => (
    <SelectItem
      key={column.label}
      selected={value == column.value}
      onClick={onSelect(column)}
    >
      {column.label}
    </SelectItem>
  ));
};

const SelectItem: React.FC<SelectMenuProps> = ({
  children,
  selected,
  onClick,
}) => {
  return (
    <Container $selected={selected} onClick={onClick}>
      <p>{children}</p>
    </Container>
  );
};

const SelectItemTitleContainer = styled.div<{ $selected?: boolean }>`
  padding: 4px 16px;
  color: #a5abb1;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
`;

interface SelectMenuProps {
  children: React.ReactNode;
  selected?: boolean;
}

export const SelectItemTitle: React.FC<SelectMenuProps> = ({
  children,
  selected,
}) => {
  return (
    <SelectItemTitleContainer $selected={selected}>
      <p>{children}</p>
    </SelectItemTitleContainer>
  );
};

export default SelectItem;
