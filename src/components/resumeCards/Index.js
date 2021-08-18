import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import educationImg from '../../locales/images/education.png';
import experienceImg from '../../locales/images/experience.png';
import skillSetImg from '../../locales/images/skillSet.png';
import './style.css';

function Index() {

  const { t, i18n } = useTranslation();
  const textAlignStyle = i18n.language === 'en' ? 'start' : 'end';

  const EDUCATION = [
    <Col xs={12} md={7}>
      <div className='educationDiv'>
        <p className='educationP'>
          {t("ikhlas")}
        </p>
        <p className='educationP'>
          {t("BAUENM")}
        </p>
        <p className='educationP'>
          {t("BAUCMP")}
        </p>
        <p className='educationP'>
          {t("REFEWD")}
        </p>
      </div>
    </Col>,
    <Col xs={10} md={5}>
      <Image src={educationImg} alt="Education Image Demonstration" style={{width: '100%'}} rounded />
    </Col>
  ];

  const EXPERIENCE = [
    <Col xs={10} md={5}>
      <Image src={experienceImg} alt="Education Image Demonstration" style={{width: '100%'}} rounded />
    </Col>,
    <Col xs={12} md={7}>
      <div className='educationDiv'>
        <p className='educationP'>
          {t("limak")}
        </p>
        <p className='educationP'>
          {t("zayoom")}
        </p>
        <p className='educationP'>
          {t("blooms")}
        </p>
        <p className='educationP'>
          {t("ebursum")}
        </p>
      </div>
    </Col>
  ];

  return (
    <div style={{textAlign: textAlignStyle}}>
      <>
        <Row>
          <h3 className="resumeTitles">
            {t("education")}
          </h3>
        </Row>
        <Row className="justify-content-center ms-1 me-1 align-items-center rowView">
          {i18n.language === 'en' ? EDUCATION : EDUCATION.reverse()}
        </Row>
      </>
      <>
        <Row>
          <h3 className="resumeTitles">
            {t("experience")}
          </h3>
        </Row>
        <Row className="justify-content-center ms-1 me-1 align-items-center">
          {i18n.language === 'en' ? EXPERIENCE : EXPERIENCE.reverse()}
        </Row>
      </>
      <>
        
        <Row className="justify-content-center ms-1 me-1 align-items-center">
          {/* {i18n.language === 'en' ? EXPERIENCE : EXPERIENCE.reverse()} */}
          <Col xs={12} md={7}>
            <Row>
              <h3 className="resumeTitles" style={{marginBottom: '2rem'}}>
                {t("skills")}
              </h3>
            </Row>
            <Row className="justify-content-center align-items-center skillSet">
              <Col xs={6} md={6}>
                <p>{t("skillSet1")}</p>
                <p>{t("skillSet2")}</p>
                <p>{t("skillSet3")}</p>
                <p>{t("skillSet4")}</p>
                <p>{t("skillSet5")}</p>
                <p>{t("skillSet6")}</p>
              </Col>
              <Col xs={6} md={6}>
                <p>{t("skillSet7")}</p>
                <p>{t("skillSet8")}</p>
                <p>{t("skillSet9")}</p>
                <p>{t("skillSet10")}</p>
                <p>{t("skillSet11")}</p>
                <p>{t("skillSet12")}</p>
              </Col>
            </Row>
          </Col>
          <Col xs={10} md={5}>
            <Image src={skillSetImg} alt="Education Image Demonstration" style={{width: '100%'}} rounded />
          </Col>
        </Row>
      </>
    </div>
  );
}

export default Index;