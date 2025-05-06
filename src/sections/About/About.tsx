import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaHandshake, FaChartLine } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import { AboutContent, AboutItem } from './About.styles';

// Явное приведение типов для иконок
const TruckIcon = FaTruck as React.ComponentType<{ size?: number }>;
const HandshakeIcon = FaHandshake as React.ComponentType<{ size?: number }>;
const ChartLineIcon = FaChartLine as React.ComponentType<{ size?: number }>;

const About: React.FC = () => {
    const aboutItems = [
        {
            icon: <TruckIcon size={50} />,
            title: 'Опыт в грузоперевозках',
            description: 'Более 10 лет успешной работы на рынке транспортных услуг',
        },
        {
            icon: <HandshakeIcon size={50} />,
            title: 'Надежные партнеры',
            description: 'Сотрудничаем только с проверенными перевозчиками и заказчиками',
        },
        {
            icon: <ChartLineIcon size={50} />,
            title: 'Стабильный рост',
            description: 'Ежегодно увеличиваем объемы перевозок и количество клиентов',
        },
    ];

    return (
        <Section id="about" title="О компании">
            <AboutContent>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    НИКОЛЬ ТЕК - это профессиональный посредник между перевозчиками и заказчиками,
                    обеспечивающий оптимальные логистические решения с 2012 года.
                    Наша миссия - сделать процесс грузоперевозок простым, надежным и выгодным для всех участников.
                </motion.p>

                <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {aboutItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <AboutItem>
                                <div style={{ color: '#3498db', marginBottom: '1rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>{item.title}</h3>
                                <p>{item.description}</p>
                            </AboutItem>
                        </motion.div>
                    ))}
                </div>
            </AboutContent>
        </Section>
    );
};

export default About;