import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section/Section';
import {
    TeamContainer,
    TeamSlider,
    TeamSlide,
    TeamMember,
    SliderControls,
    SliderButton,
    SliderDots
} from './Team.styles';

const Team: React.FC = () => {
    const teamMembers = [
        {
            name: 'Наша команда',
            position: 'Профессионалы в логистике',
            photo: '/images/assets/1.jpg',
        },
        {
            name: 'Опытные специалисты',
            position: 'Команда менеджеров',
            photo: '/images/assets/2.jpg',
        },
        {
            name: 'Слаженная работа',
            position: 'Транспортные эксперты',
            photo: '/images/assets/3.jpg',
        },
        {
            name: 'Наша команда',
            position: 'Профессионалы в логистике',
            photo: '/images/assets/4.jpg',
        },
        {
            name: 'Опытные специалисты',
            position: 'Команда менеджеров',
            photo: '/images/assets/5.jpg',
        },
        {
            name: 'Слаженная работа',
            position: 'Транспортные эксперты',
            photo: '/images/assets/6.jpg',
        },
        {
            name: 'Наша команда',
            position: 'Профессионалы в логистике',
            photo: '/images/assets/7.jpg',
        },
        {
            name: 'Опытные специалисты',
            position: 'Команда менеджеров',
            photo: '/images/assets/8.jpg',
        },
        {
            name: 'Слаженная работа',
            position: 'Транспортные эксперты',
            photo: '/images/assets/9.jpg',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % teamMembers.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, teamMembers.length]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % teamMembers.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <Section id="team" title="Наша команда" bgColor="#f8f9fa">
            <TeamContainer>
                <TeamSlider
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {teamMembers.map((member, index) => (
                        <TeamSlide key={index}>
                            <TeamMember>
                                <div className="photo-container">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                </motion.div>
                            </TeamMember>
                        </TeamSlide>
                    ))}
                </TeamSlider>

                <SliderControls>
                    <SliderButton onClick={prevSlide} aria-label="Previous slide">
                        &lt;
                    </SliderButton>
                    <SliderButton onClick={nextSlide} aria-label="Next slide">
                        &gt;
                    </SliderButton>
                </SliderControls>

                <SliderDots>
                    {teamMembers.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </SliderDots>
            </TeamContainer>
        </Section>
    );
};

export default Team;