import React from 'react';
import { Card, Image } from 'react-bootstrap';
import resumeImage from '../../locales/images/resume.png';
import { useTranslation } from 'react-i18next';
import github from '../../locales/images/github.png';
import linkedin from '../../locales/images/linkedin.png';
import gmail from '../../locales/images/gmail.png';
import './style.css';

function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Card style={{ width: '100%' }} className='informationCard'>
        <Card.Img variant="top" src={resumeImage} className='cardImage' />
        <Card.Body>
          <Card.Title><h2>{t('bilalAvvad')}</h2></Card.Title>
          <hr />
          <div className='websiteImages'>
            <Card.Link href="https://github.com/awadbilal" target='_blank'>
              <Image
                style={{ width: "50px", height: "50px" }}
                src={github}
                roundedCircle
              />
            </Card.Link>
            <Card.Link href="https://www.linkedin.com/in/bilal-avvad/" target='_blank'>
              <Image
                style={{ width: "50px", height: "50px" }}
                src={linkedin}
                roundedCircle
              />
            </Card.Link>
            <Card.Link href="mailto:awadbilal99@gmail.com" target='_blank'>
              <Image
                style={{ width: "50px", height: "50px" }}
                src={gmail}
                roundedCircle
              />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Index;