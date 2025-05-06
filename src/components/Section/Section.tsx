import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { SectionContainer, SectionContent, SectionTitle } from './Section.styles';

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    bgColor?: string;
    textColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, bgColor, textColor }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <SectionContainer id={id} ref={ref} bgColor={bgColor} textColor={textColor}>
            <SectionContent>
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>{title}</SectionTitle>
                    </motion.div>
                )}
                {children}
            </SectionContent>
        </SectionContainer>
    );
};

export default Section;