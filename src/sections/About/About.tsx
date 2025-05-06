import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaHandshake, FaChartLine } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import { AboutContent, AboutItem } from './About.styles';

const TruckIcon = FaTruck as React.ComponentType<{ size?: number }>;
const HandshakeIcon = FaHandshake as React.ComponentType<{ size?: number }>;
const ChartLineIcon = FaChartLine as React.ComponentType<{ size?: number }>;

const About: React.FC = () => {
    const aboutItems = [
        {
            icon: <TruckIcon size={50} />,
            title: 'Профессиональный подход',
            description: 'Команда с 10-летним опытом в логистике. За 1.5 года реализовали 200+ транспортных проектов с 98% положительных отзывов',
        },
        {
            icon: <HandshakeIcon size={50} />,
            title: 'Проверенные партнеры',
            description: 'Собственная база из 30+ надежных перевозчиков. Тщательный отбор каждого партнера для гарантии сохранности грузов',
        },
        {
            icon: <ChartLineIcon size={50} />,
            title: 'Динамичное развитие',
            description: 'За первые 1.5 года удвоили клиентскую базу и расширили географию перевозок на 15 регионов России',
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
                    НИКОЛЬ ТЭК - ведущий логистический оператор и профессиональный посредник между перевозчиками и заказчиками грузов в России.
                    С 2023 года мы обеспечиваем надежные грузоперевозки по всей стране, предлагая оптимальные транспортно-логистические решения.
                    Наша миссия - сделать организацию перевозок максимально простой, безопасной и выгодной для всех участников процесса.
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