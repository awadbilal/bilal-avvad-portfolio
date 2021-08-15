import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';

function Index() {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Row>
        <h1 className={i18n.language}>{t('aboutLink')}</h1>
      </Row>
    </Container>
  );
}

export default Index;