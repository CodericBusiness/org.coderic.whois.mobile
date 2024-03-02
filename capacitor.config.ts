import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.coderic.whois.mobile',
  appName: 'Whois',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      "rdap.org"
    ]
  },
  plugins:{
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#ffffffff',
      launchAutoHide: true
    }
  }
};

export default config;
