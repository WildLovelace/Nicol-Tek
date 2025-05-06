import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeaderContainer, Nav, Logo, NavList, NavItem, MobileMenuButton } from './Header.styles';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'О нас' },
        { id: 'activities', label: 'Деятельность' },
        { id: 'advantages', label: 'Преимущества' },
        { id: 'team', label: 'Команда' },
        { id: 'contact', label: 'Контакты' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <HeaderContainer ref={ref} isScrolled={isScrolled} isMenuOpen={isMenuOpen}>
            <Nav>
                <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src='images/logo.png' alt='LOGO'></img>
                </Logo>
                <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span />
                    <span />
                    <span />
                </MobileMenuButton>
                <NavList isMenuOpen={isMenuOpen}>
                    {navItems.map((item) => (
                        <NavItem key={item.id}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </motion.div>
                        </NavItem>
                    ))}
                </NavList>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;