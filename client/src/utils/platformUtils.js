import React from 'react';
import { Facebook, Twitter, LinkedIn, YouTube, Pinterest, WhatsApp } from '@mui/icons-material';

export const getPlatformIcon = (platformName) => {
  const icons = {
    Facebook: <Facebook />,
    Twitter: <Twitter />,
    LinkedIn: <LinkedIn />,
    YouTube: <YouTube />,
    Pinterest: <Pinterest />,
    WhatsApp: <WhatsApp />
  };

  return icons[platformName] || null;
};

export const validatePlatformCredentials = (platform, credentials) => {
  const validators = {
    Facebook: validateFacebookCredentials,
    Twitter: validateTwitterCredentials,
    LinkedIn: validateLinkedInCredentials,
    YouTube: validateYouTubeCredentials,
    Pinterest: validatePinterestCredentials,
    WhatsApp: validateWhatsAppCredentials
  };

  return validators[platform]?.(credentials) ?? false;
};

// Platform-specific validation functions
function validateFacebookCredentials(credentials) {
  return !!(credentials.appId && credentials.appSecret && credentials.accessToken);
}

function validateTwitterCredentials(credentials) {
  return !!(credentials.apiKey && credentials.apiSecret && credentials.accessToken);
}

function validateLinkedInCredentials(credentials) {
  return !!(credentials.clientId && credentials.clientSecret && credentials.accessToken);
}

function validateYouTubeCredentials(credentials) {
  return !!(credentials.apiKey && credentials.clientId && credentials.clientSecret);
}

function validatePinterestCredentials(credentials) {
  return !!(credentials.appId && credentials.appSecret && credentials.accessToken);
}

function validateWhatsAppCredentials(credentials) {
  return !!(credentials.phoneNumber && credentials.apiKey);
}