import React from 'react';
import { motion } from 'framer-motion';
import { ButtonContainer } from './Button.styles';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    type = 'button',
}) => {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick();
        } else {
            window.location.href = 'https://wa.me/79525830337';
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <ButtonContainer
                onClick={handleClick}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                type={type}
            >
                {children}
            </ButtonContainer>
        </motion.div>
    );
};

export default Button;