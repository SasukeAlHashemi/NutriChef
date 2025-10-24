module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      providers: [
        {
          uid: 'google',
          displayName: 'Google',
          icon: 'google',
          createStrategy: 'oauth2',
          config: {
            authorizeUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
            accessUrl: 'https://www.googleapis.com/oauth2/v4/token',
            userUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
            scope: ['email', 'profile'],
            clientId: env('GOOGLE_CLIENT_ID'),
            clientSecret: env('GOOGLE_CLIENT_SECRET'),
            redirectUri: 'http://localhost:1337/api/connect/google/callback',
          },
        },
      ],
    },
  },
});

