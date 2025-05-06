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
                <iframe
                    src="https://vk.com/video_ext.php?oid=-226531428&id=456239018&hd=4&autoplay=1&loop=1&muted=1&js_api=0"
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    frameBorder="0"
                    allowFullScreen
                    title="Фоновое видео"
                />
            </HeroVideoBackground>

            <HeroOverlay />

            <HeroContent>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeroSubtitle>Добро пожаловать в</HeroSubtitle>
                    <HeroTitle>НИКОЛЬ ТЕК</HeroTitle>
                    <p>Надежный посредник между перевозчиками и заказчиками. Мы создаем мосты между вашими грузами и их пунктом назначения.</p>
                    <HeroButtons>
                        <Button variant="primary" size="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Стать клиентом
                        </Button>
                        <Button variant="primary" size="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Присоединиться к команде
                        </Button>
                    </HeroButtons>
                </motion.div>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;