import appConfig from 'app/app.config'

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
  },
}
