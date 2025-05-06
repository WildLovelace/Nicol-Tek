import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterLink, FooterBottom } from './Footer.styles';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>НИКОЛЬ ТЭК</FooterTitle>
                    <p>Посредник между перевозчиками и заказчиками, обеспечивающий надежные и выгодные решения в сфере грузоперевозок.</p>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Контакты</FooterTitle>
                    <FooterLink href="tel:+79999999999">
                        {React.createElement(FaPhone as React.ComponentType)} +79525830337
                    </FooterLink>
                    <FooterLink href="mailto:info@nikoltek.ru">
                        {React.createElement(FaEnvelope as React.ComponentType)} NikolTEK1@yandex.ru
                    </FooterLink>
                    <FooterLink>
                        {React.createElement(FaMapMarkerAlt as React.ComponentType)} Ростов-на-Дону, ул. Соборный 94/139
                    </FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Навигация</FooterTitle>
                    <FooterLink href="#about">О нас</FooterLink>
                    <FooterLink href="#activities">Деятельность</FooterLink>
                    <FooterLink href="#advantages">Преимущества</FooterLink>
                    <FooterLink href="#team">Команда</FooterLink>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <p>&copy; {new Date().getFullYear()} НИКОЛЬ ТЭК. Все права защищены.</p>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;