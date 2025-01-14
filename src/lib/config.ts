import "dotenv/config";

export const config = {
  env: {
    databaseUrl: process.env.DATABASE_URL!,
    kinde: {
      clientId: process.env.KINDE_CLIENT_ID!,
      clientSecret: process.env.KINDE_CLIENT_SECRET!,
      issuerUrl: process.env.KINDE_ISSUER_URL!,
      siteUrl: process.env.KINDE_SITE_URL!,
      postLogoutRedirectUrl: process.env.KINDE_POST_LOGOUT_REDIRECT_URL!,
      postLoginRedirectUrl: process.env.KINDE_POST_LOGIN_REDIRECT_URL!,
      domain: process.env.KINDE_DOMAIN!,
      managementClientId: process.env.KINDE_MANAGEMENT_CLIENT_ID!,
      managementClientSecret: process.env.KINDE_MANAGEMENT_CLIENT_SECRET!,
      loginUrl: process.env.KINDE_LOGIN_URL!,
    },
  },
};
