import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

function Index() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_5o2rk9p', 'template_vk8ptgh', formData, 'user_io3TkmEhP1duYWJAZ70M6')
    setFormData({
      name: '',
      email: '',
      number: '',
      message: ''
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            {t('formName')}
          </Form.Label>
          <Form.Control type="text" placeholder={t('yourNamePlaceHolder')} name='name' value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            {t('formEmail')}
          </Form.Label>
          <Form.Control type="email" placeholder={t('yourEmailPlaceHolder')} name='email' value={formData.email} onChange={handleChange} required />
          <Form.Text className="text-muted">{t('formEmailControl')}</Form.Text>
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            {t('formNumber')}
          </Form.Label>
          <Form.Control type="number" placeholder={t('yourNumberPlaceHolder')} name='number' value={formData.number} onChange={handleChange} />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('formMessage')}</Form.Label>
          <Form.Control as="textarea" rows={8} placeholder={t('yourMessagePlaceHolder')} name='message' value={formData.message} onChange={handleChange} />
        </Form.Group>
        <hr />
        <div className="d-grid gap-2">
          <Button variant="outline-success" type="submit" style={{justifySelf: 'center'}} size="lg">
            {t('formSubmit')}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Index;