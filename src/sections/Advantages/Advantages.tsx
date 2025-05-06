import React from 'react';
import { motion } from 'framer-motion';
import { FaPercent, FaShieldAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import { AdvantagesGrid, AdvantageItem } from './Advantages.styles';

const PercentIcon = FaPercent as React.ComponentType<{ size?: number }>;
const ShieldAltIcon = FaShieldAlt as React.ComponentType<{ size?: number }>;
const ClockIcon = FaClock as React.ComponentType<{ size?: number }>;
const MoneyBillWaveIcon = FaMoneyBillWave as React.ComponentType<{ size?: number }>;

const Advantages: React.FC = () => {
    const advantages = [
        {
            icon: <PercentIcon size={40} />,
            title: 'Выгодные тарифы',
            description: 'Мы предлагаем конкурентные цены благодаря прямым договорам с перевозчиками',
        },
        {
            icon: <ShieldAltIcon size={40} />,
            title: 'Надежность',
            description: 'Страхование грузов и тщательный отбор перевозчиков',
        },
        {
            icon: <ClockIcon size={40} />,
            title: 'Скорость',
            description: 'Оперативное решение любых вопросов и быстрая организация перевозок',
        },
        {
            icon: <MoneyBillWaveIcon size={40} />,
            title: 'Гибкая оплата',
            description: 'Различные варианты оплаты, включая отсрочку платежа для постоянных клиентов',
        },
    ];

    return (
        <Section id="advantages" title="Наши преимущества">
            <AdvantagesGrid>
                {advantages.map((advantage, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <AdvantageItem>
                            <div style={{ color: '#3498db', marginBottom: '1rem' }}>{advantage.icon}</div>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.description}</p>
                        </AdvantageItem>
                    </motion.div>
                ))}
            </AdvantagesGrid>
        </Section>
    );
};

export default Advantages;