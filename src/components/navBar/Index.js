import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './style.css';
import { useTranslation } from 'react-i18next';

function Index() {

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") i18n.changeLanguage("ar");
    else i18n.changeLanguage("en");
  };

  const navLinks = [
    <Nav.Link><Link className={i18n.language} to='/'>{t('homeLink')}</Link></Nav.Link>,
    <NavDropdown.Divider />,
    <Nav.Link><Link className={i18n.language} to='/about'>{t('aboutLink')}</Link></Nav.Link>,
    <NavDropdown.Divider />,
    <Nav.Link><Link className={i18n.language} to='/workSample'>{t('workSampleLink')}</Link></Nav.Link>,
    <NavDropdown.Divider />,
    <Nav.Link><Link className={i18n.language} to='/resume'>{t('resumeLink')}</Link></Nav.Link>,
    <NavDropdown.Divider />,
    <Nav.Link><Link className={i18n.language} to='/contact-me'>{t('contactMeLink')}</Link></Nav.Link>,
  ]

  return (
    <>
      <Navbar className='navBarSection' collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/" expand="lg" className={`navBarLogo ${i18n.language === 'en' ? 'col-4' : 'col-3'}`} >
            <span className={i18n.language}>{t('myName')}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={`${i18n.language === 'en' ? 'col-8' : 'col-9'}`}>
            <Nav className="me-auto pt-3 pb-3">
              {i18n.language === 'en' ? navLinks : navLinks.reverse()}
            </Nav>
            <Nav>
              <Button className='languageButton' onClick={changeLanguage}>
                {i18n.language === "en" ? "العربية" : "English"}
              </Button>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Index;