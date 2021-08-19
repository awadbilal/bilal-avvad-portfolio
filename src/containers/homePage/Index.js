import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/heroSection/Index';
import './style.css';

function Index() {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Row>
        <h1 className={i18n.language}>{t('home')}</h1>
      </Row>
      <Row>
        <HeroSection />
      </Row>
    </Container>
  );
}

export default Index;