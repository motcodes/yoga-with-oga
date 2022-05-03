import 'dotenv/config'

export default {
  expo: {
    name: 'yoga-with-oga',
    slug: 'yoga-with-oga',
    version: '1.0.0',
    sdkVersion: '44.0.0',
    scheme: 'solito-blank',
    owner: 'motcodes',
    platforms: ['ios', 'android', 'web'],
    ios: {
      bundleIdentifier: 'com.solito.blank',
    },
    android: {
      package: 'com.solito.blank',
    },
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,

      VIMEO_CLIENT_IDENTIFIER: process.env.VIMEO_CLIENT_IDENTIFIER,
      VIMEO_CLIENT_SECRET: process.env.VIMEO_CLIENT_SECRET,
      VIMEO_ACCESS_TOKEN: process.env.VIMEO_ACCESS_TOKEN,
    },
  },
}
