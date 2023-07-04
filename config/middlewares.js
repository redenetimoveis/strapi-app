module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
        frameguard: false,
        xssFilter: true,
        /* "frameguard.action": sameorigin, */
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
        "connect-src": ["'self'", "https:"],
        "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,
        ],
        "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,

        ],
        upgradeInsecureRequests: null,
        },
    },
    },
  },
  {
    name: 'strapi::session',
    config: {
      rolling: true,
      maxAge: 86400000
    },
  },
];
