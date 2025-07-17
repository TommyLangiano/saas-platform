import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    // Questa configurazione verrà aggiornata dopo aver creato Cognito
    region: process.env.REACT_APP_AWS_REGION || 'eu-west-1',
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    // Per Hosted UI (opzionale)
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: process.env.REACT_APP_REDIRECT_SIGN_IN || window.location.origin,
      redirectSignOut: process.env.REACT_APP_REDIRECT_SIGN_OUT || window.location.origin,
      responseType: 'code'
    }
  },
  Storage: {
    // Configurazione S3 (verrà aggiornata dopo aver creato il bucket)
    AWSS3: {
      bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      region: process.env.REACT_APP_AWS_REGION || 'eu-west-1'
    }
  },
  API: {
    REST: {
      // API Gateway endpoints (se li userai)
      api: {
        endpoint: process.env.REACT_APP_API_URL || 'http://localhost:5050',
        region: process.env.REACT_APP_AWS_REGION || 'eu-west-1'
      }
    }
  }
};

// Configura Amplify
Amplify.configure(amplifyConfig);

export default amplifyConfig; 