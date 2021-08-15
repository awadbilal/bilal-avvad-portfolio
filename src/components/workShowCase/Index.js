import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';

function Index() {

  const { t, i18n } = useTranslation();
  
  const [websiteTitle, setWebsiteTitle] = useState(null);
  const [websiteLink, setWebsiteLink] = useState(null);
  const [view, isView] = useState(false);

  const websiteList = {
    theMovieDBA: 'https://imoviedba.netlify.app/',
    prm: 'https://prm.netlify.app/',
    madLibsGame: 'https://madlibsgame.netlify.app/',
    bootStrap: 'https://bootstrapcss.netlify.app/',
  }

  const handleClick = (e) => {
    e.target.name === websiteTitle ? isView(false) : isView(true);
    setWebsiteTitle(e.target.name);
    setWebsiteLink(websiteList[e.target.name]);
    // isView(true);
  }

  return (
    <>
      <Container>
        <Row>
          <h1 className={i18n.language}>{t('workSample')}</h1>
        </Row>
        <br />
        <Row>
          {/* This is for the Movie DBA */}
          <Col lg={3} md={6} sm={12} className='cardsCol'>
            <Card className="webCard">
              <Card.Header as="h5" className="cardHeader">The Movie DBA</Card.Header>
              <Card.Body className="webCardBody" style={{textAlign: i18n.language === 'en' ? 'start' : 'end'}}>
                <Card.Text>
                  {t('theMovieDBADesc')}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <hr />
                  <Button name="theMovieDBA" variant="primary" onClick={handleClick}>
                    {t('workButton')}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* This is for Project Manager */}
          <Col lg={3} md={6} sm={12} className='cardsCol'>
            <Card className="webCard">
              <Card.Header as="h5" className="cardHeader">Project Manager</Card.Header>
              <Card.Body className="webCardBody" style={{textAlign: i18n.language === 'en' ? 'start' : 'end'}}>
                <Card.Text>
                  {t('prmDesc')}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <hr />
                  <Button name="prm" variant="primary" onClick={handleClick}>
                    {t('workButton')}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* This is for Mad Libs Game */}
          <Col lg={3} md={6} sm={12} className='cardsCol'>
            <Card className="webCard">
              <Card.Header as="h5" className="cardHeader">Mad Libs Game</Card.Header>
              <Card.Body className="webCardBody" style={{textAlign: i18n.language === 'en' ? 'start' : 'end'}}>
                <Card.Text>
                  {t('madLibsDesc')}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <hr />
                  <Button name="madLibsGame" variant="primary" onClick={handleClick}>
                    {t('workButton')}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* This is for CSS Bootstrap */}
          <Col lg={3} md={6} sm={12} className='cardsCol'>
            <Card className="webCard">
              <Card.Header as="h5" className="cardHeader">HTML5 & CSS3 Sample</Card.Header>
              <Card.Body className="webCardBody" style={{textAlign: i18n.language === 'en' ? 'start' : 'end'}}>
                <Card.Text>
                  {t('bootStrapDesc')}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <hr />
                  <Button name="bootStrap" variant="primary" onClick={handleClick}>
                    {t('workButton')}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4rem'}}>
          <iframe style={{width: '100%', height: '80vh', alignSelf: 'center', justifySelf: 'center', display: view === true ? 'block' : 'none'}} src={websiteLink} title={websiteTitle} />
        </div> 
      </Container>
    </>
  );
}

export default Index;