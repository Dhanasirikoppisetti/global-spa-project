
import React from 'react';
import { useTranslation } from 'react-i18next';

const footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f6b4a 0%, #1a8f61 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ margin: '0.5rem 0' }}>
        &copy; {currentYear} {t('app_name')}. All rights reserved.
      </p>
      <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
        Multi-language SPA with i18n support
      </p>
    </footer>
  );
};

export default footer;
