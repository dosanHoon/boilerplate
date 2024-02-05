import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  size?: string;
  position?: string;
  children: React.ReactNode;
}

const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: ${({ position }) => position?.includes('top') ? '10%' : '50%'};
  left: ${({ position }) => position?.includes('left') ? '10%' : '50%'};
  transform: translate(-50%, -50%);
  width: ${({ size }) => size || '400px'};
  height: ${({ size }) => size || '300px'};
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Modal: React.FC<ModalProps> = ({ size, position, children }) => {
  return (
    <ModalContainer size={size} position={position}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
