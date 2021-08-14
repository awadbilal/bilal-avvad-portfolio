import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { useTranslation } from 'react-i18next';
import ContactInformation from '../../components/contactInformation/Index';
import ContactForm from '../../components/contactForm/Index';

function Index() {
  const { t, i18n } = useTranslation();

  return (
    <div className='headerSection'>
      <Container>
        <Row>
          <h1 className={i18n.language}>{t('contactInfo')}</h1>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={4}><ContactInformation /></Col>
          <Col xs={12} md={8}><ContactForm /></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Index;