import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import { ContactContainer, ContactInfo, ContactForm, FormGroup } from './Contact.styles';

// Явное приведение типов для иконок
const PhoneIcon = FaPhone as React.ComponentType;
const EnvelopeIcon = FaEnvelope as React.ComponentType;
const MapMarkerAltIcon = FaMapMarkerAlt as React.ComponentType;

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <Section id="contact" title="Свяжитесь с нами">
            <ContactContainer>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ContactInfo>
                        <h3>Контактная информация</h3>
                        <p>Мы всегда рады новым клиентам и сотрудникам. Свяжитесь с нами удобным для вас способом.</p>

                        <div className="contact-item">
                            <PhoneIcon />
                            <div>
                                <h4>Телефон</h4>
                                <p>+79525830337</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <EnvelopeIcon />
                            <div>
                                <h4>Email</h4>
                                <p>NikolTEK1@yandex.ru</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <MapMarkerAltIcon />
                            <div>
                                <h4>Адрес</h4>
                                <p>Соборный 94/139</p>
                                <p>6 Этаж</p>
                            </div>
                        </div>
                    </ContactInfo>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ContactForm onSubmit={handleSubmit}>
                        <h3>Отправить сообщение</h3>
                        <FormGroup>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Ваш телефон"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button type="submit" variant="primary" fullWidth>
                            Отправить
                        </Button>
                    </ContactForm>
                </motion.div>
            </ContactContainer>
        </Section>
    );
};

export default Contact;