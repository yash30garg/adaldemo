import { AuthenticationContext, adalFetch } from 'react-adal';

export const adalConfig = {
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: 'fa4a8ff6-3309-4f2c-8706-4dd17bd5cb90',
  endpoints: {
    api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
  },
  postLogoutRedirectUri : "http://localhost:3000/",
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);