import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './style.css';
import { useTranslation } from 'react-i18next';

function Index() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar className='footerSection' collapseOnSelect >
        <Container className='justify-content-around' expand="lg" sticky="bottom">
          <a href='/' className={`footer` + i18n.language} style={{cursor: 'default'}}>
            {t('reservedRights')}
          </a>
        </Container>
      </Navbar>
    </>
  );
}

export default Index;