import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import heroImg from '../../locales/images/homeHero.png';

function Index() {

  const { t, i18n } = useTranslation();
  const textAlignStyle = i18n.language === 'en' ? 'start' : 'end';

  const calculateAge = function() {
    let ageP = 21;
    const currentDate = new Date().getDate();                           // Get the current date value
    const currentMonth = new Date().getMonth() + 1;                     // Get the current month value
    const currentYear = new Date().getFullYear();                       // Get the current year value
    if(currentMonth < 10) ageP = currentYear - 2000;
    else if (currentMonth > 10) ageP = currentYear - 1999;
    else {
      if(currentDate < 25) ageP = currentYear - 2000;
      else ageP = currentYear - 1999;
    }
    return ageP;
  }();



  return (
    <>
      <Col xs={12} md={5}>
        <Row className="justify-content-center pt-4 imageViewPort">
          <Image src={heroImg} alt="Hero Section Image" style={{width: '100%'}} rounded />
        </Row>
      </Col>
      <Col xs={12} md={7} style={{textAlign: textAlignStyle}} className="pt-5 pb-3 messageP">
        <p><b>{t('dearReader')}</b></p> 
        <p>{t('myself1')}{calculateAge}{t('myself2')}</p>
        <p>{t('homeENM')}</p>
        <p>{t('homeCMP')}</p>
        <p>{t('homeREC')}</p>
        <p>{t('homeEBU')}</p>
      </Col>
      <Row className="justify-content-center align-items-center pt-3 pb-2 forMore">
        {t('forMore')}
      </Row>
      <Row className="justify-content-center align-items-center pb-5 pt-3">
        <Col sm={3} md={3} className="pe-5 ps-5">
          <Button className="homeButtons" variant='outline-primary'>
            <Link to='/resume'>{t("forMoreRes")}</Link>
          </Button>
        </Col>
        <Col sm={3} md={3} className="pe-5 ps-5">
          <Button className="homeButtons" variant='outline-primary'>
            <Link to='/workSample'>{t("forMorePre")}</Link>
          </Button>
        </Col>
        <Col sm={3} md={3} className="pe-5 ps-5">
          <Button className="homeButtons" variant='outline-primary'>
            <Link to='/contact-me'>{t("forMoreCon")}</Link>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Index;