import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "../../components/Section/Section";
import { theme } from "../../styles/theme";
import {
  TeamContainer,
  TeamSlider,
  TeamSlide,
  TeamMember,
  SliderDots,
} from "./Team.styles";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Наша команда",
      position: "Профессионалы в логистике",
      photo: "/images/assets/1.jpg",
    },
    {
      name: "Опытные специалисты",
      position: "Команда менеджеров",
      photo: "/images/assets/2.jpg",
    },
    {
      name: "Слаженная работа",
      position: "Транспортные эксперты",
      photo: "/images/assets/3.jpg",
    },
    {
      name: "Наша команда",
      position: "Профессионалы в логистике",
      photo: "/images/assets/4.jpg",
    },
    {
      name: "Опытные специалисты",
      position: "Команда менеджеров",
      photo: "/images/assets/5.jpg",
    },
  ];

  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [slidesPerGroup, setSlidesPerGroup] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerGroup(1);
      } else {
        setSlidesPerGroup(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.ceil(teamMembers.length / slidesPerGroup);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentGroup((prev) => (prev + 1) % totalGroups);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalGroups]);

  const goToGroup = (index: number) => {
    setCurrentGroup(index);
    setIsAutoPlaying(false);
  };

  return (
    <Section id="team" title="Наша команда" bgColor="#f8f9fa">
      <TeamContainer>
        <TeamSlider
          style={{
            transform: `translateX(-${currentGroup * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <TeamSlide key={groupIndex} className="slide-group">
              {teamMembers
                .slice(
                  groupIndex * slidesPerGroup,
                  groupIndex * slidesPerGroup + slidesPerGroup
                )
                .map((member, index) => (
                  <div key={index} className="team-member-wrapper">
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
                      ></motion.div>
                    </TeamMember>
                  </div>
                ))}
            </TeamSlide>
          ))}
        </TeamSlider>
        <SliderDots>
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              className={index === currentGroup ? "active" : ""}
              onClick={() => goToGroup(index)}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </SliderDots>
      </TeamContainer>
    </Section>
  );
};

export default Team;
