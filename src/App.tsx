import React from 'react';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Activities from './sections/Activities/Activities';
import Advantages from './sections/Advantages/Advantages';
import Team from './sections/Team/Team';
import Contact from './sections/Contact/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Advantages />
        <Team />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;