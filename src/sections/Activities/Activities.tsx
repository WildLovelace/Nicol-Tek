import React from 'react';
import { motion } from 'framer-motion';
import { FaShippingFast, FaWarehouse, FaExchangeAlt } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import { ActivitiesContent, ActivityCard } from './Activities.styles';

const ShippingFastIcon = FaShippingFast as React.ComponentType<{ size?: number }>;
const WarehouseIcon = FaWarehouse as React.ComponentType<{ size?: number }>;
const ExchangeAltIcon = FaExchangeAlt as React.ComponentType<{ size?: number }>;

const Activities: React.FC = () => {
    const activities = [
        {
            icon: <ShippingFastIcon size={40} />,
            title: 'Организация грузоперевозок',
            description: 'Профессиональный подбор маршрутов и транспорта для ваших грузов. За 1.5 года работы мы организовали более 500 успешных перевозок по России',
        },
        {
            icon: <WarehouseIcon size={40} />,
            title: 'Полный логистический цикл',
            description: 'Контроль всех этапов: от погрузки до доставки. Молодая, но опытная команда гарантирует сохранность вашего груза',
        },
        {
            icon: <ExchangeAltIcon size={40} />,
            title: 'Посредничество в грузоперевозках',
            description: 'Эффективное взаимодействие между заказчиками и проверенными перевозчиками. За короткий срок создали сеть из 50+ надежных партнеров',
        },
    ]

    return (
        <Section id="activities" title="Наша деятельность" bgColor="#f8f9fa">
            <ActivitiesContent>
                {activities.map((activity, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <ActivityCard>
                            <div style={{ color: '#e74c3c', marginBottom: '1rem' }}>{activity.icon}</div>
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </ActivityCard>
                    </motion.div>
                ))}
            </ActivitiesContent>
        </Section>
    );
};

export default Activities;