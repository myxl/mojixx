export default {
  admin: {
    authorize: {
      clientId: 2,
      clientSecret: 'pQG6Ibv6cDKfzeDo5liLEHohZmveN2myhhF93U7Y'
    },
    loginRouteName: 'adminLogin',

    dashboardName: 'adminDashboard',

    dashboardFullPath: '/admin/dashboard',

    appName: {
      fullName: 'Mojito Admin',
      abbrName: 'Mojito'
    },

    locale: 'en'
  },

  guardNames: [
    {
      label: 'admin',
      value: 'admin'
    }
  ],

  apiUrl: '',

  //Unit is day
  tokenTTL: 1,

  //Unit is day
  refreshTokenTTL: 7,

  showAuthorGitHubUrl: true,
}