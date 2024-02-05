import React from "react";

import { IconWithText } from "../Icon";
import Button from "./button";

interface IconButtonProps {
    icon: string;
    text: string;
    onClick?: () => void;
    width?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, onClick, width }) => {
    return (
        <Button onClick={onClick} width={width}>
            <IconWithText icon={icon} text={text} textPosition={"right"} />
        </Button>
    );
};

export default IconButton;
