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
            title: 'Выгодные цены на грузоперевозки',
            description: 'Экономия до 25% за счет прямых договоров с 30+ проверенными перевозчиками по России',
        },
        {
            icon: <ShieldAltIcon size={40} />,
            title: 'Полная сохранность грузов',
            description: '100% страхование и GPS-мониторинг всех перевозок. За 1.5 года - 0 случаев потери груза',
        },
        {
            icon: <ClockIcon size={40} />,
            title: 'Экспресс-логистика',
            description: 'Организуем срочные грузоперевозки за 24 часа. Среднее время обработки заявки - 1 час',
        },
        {
            icon: <MoneyBillWaveIcon size={40} />,
            title: 'Гибкие условия оплаты',
            description: 'Безналичный расчет, НДС, отсрочка платежа для 80% постоянных клиентов',
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
                            <div className="advantage-icon">{advantage.icon}</div>
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