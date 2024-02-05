import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const hidden = { display: "none" };
    return (
        <CheckboxConiner>
            <label>
                <Image
                    src={`/ui/checked-${checked ? "on" : "off"}.png`}
                    width={16}
                    height={16}
                    alt="checkbox"
                    style={{ marginRight: 8 }}
                />
                <input
                    type="checkbox"
                    checked={checked}
                    style={hidden}
                    onChange={onChange}
                />
                {label}
            </label>
        </CheckboxConiner>
    );
};

const CheckboxConiner = styled.div`
    & > label {
        display: flex;
        align-items: center;
    }
`;

interface CheckboxGroupProps {
    checkboxes: CheckboxProps[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ checkboxes }) => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckedAll(!isCheckedAll);
        checkboxes.forEach((checkbox) => {
            checkbox.onChange();
        });
    };

    return (
        <div>
            <Checkbox
                label="Check All"
                checked={isCheckedAll}
                onChange={handleCheckboxChange}
            />
            {checkboxes.map((checkbox, index) => (
                <Checkbox
                    key={index}
                    label={checkbox.label}
                    checked={checkbox.checked}
                    onChange={checkbox.onChange}
                />
            ))}
        </div>
    );
};
export interface CheckboxType {
    checked: boolean;
    value: string;
    label: string;
}
interface UnControlledCheckboxGroupProps {
    checkboxes: CheckboxType[];
    onChange: (id: string, i: number) => void;
}

export const UnControlledCheckboxGroup: React.FC<
    UnControlledCheckboxGroupProps
> = ({ checkboxes, onChange }) => {
    const handleCheckboxChange = (id: string, i: number) => () => {
        onChange(id, i);
    };

    return (
        <>
            {checkboxes?.map((checkbox, index) => (
                <Checkbox
                    key={checkbox.value}
                    label={checkbox.label}
                    checked={checkbox.checked}
                    onChange={handleCheckboxChange(checkbox.value, index)}
                />
            ))}
        </>
    );
};

export default CheckboxGroup;
