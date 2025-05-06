import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';
import {
    HeroContainer,
    HeroVideoBackground,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
    HeroOverlay
} from './Hero.styles';

const Hero: React.FC = () => {
    return (
        <HeroContainer>
            <HeroVideoBackground>
                <video autoPlay loop muted playsInline preload="auto">
                    <source src="/video/hero-background.webm" type="video/webm" />
                    <source src="/video/hero-background.mp4" type="video/mp4" />
                </video>
            </HeroVideoBackground>

            <HeroOverlay />

            <HeroContent>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeroSubtitle>Добро пожаловать в</HeroSubtitle>
                    <HeroTitle>НИКОЛЬ ТЭК</HeroTitle>
                    <p>Надежный посредник между перевозчиками и заказчиками. Мы создаем мосты между вашими грузами и их пунктом назначения.</p>
                    <HeroButtons>
                        <Button variant="primary" size="large" >
                            Стать клиентом
                        </Button>
                        <Button variant="primary" size="large" >
                            Присоединиться к команде
                        </Button>
                    </HeroButtons>
                </motion.div>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;