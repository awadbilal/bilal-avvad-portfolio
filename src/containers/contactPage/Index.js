import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './style.css';
import ContactInformation from '../../components/contactInformation/Index';
import { useTranslation } from 'react-i18next';

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
          <ContactInformation />
        </Row>
      </Container>
    </div>
  );
}

export default Index;