import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import { useTranslation } from 'react-i18next';

function Index() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar className='navBarSection' collapseOnSelect >
        <Container className='justify-content-around' expand="lg" sticky="bottom">
          <span className={i18n.language}>
            {t('myName')}
          </span>
          <a href='/' className={`footer` + i18n.language} style={{cursor: 'default'}}>
            {t('reservedRights')}
          </a>
          <Link className={`footer` + i18n.language} to='/contact-me'>
            {t('contactMeLink')}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Index;