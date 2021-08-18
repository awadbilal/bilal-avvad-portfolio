import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ResumeContent from '../../components/resumeCards/Index';

function Index() {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Row>
        <h1 className={i18n.language}>{t('resumeLink')}</h1>
      </Row>
      <br />
      <ResumeContent />
    </Container>
  );
}

export default Index;