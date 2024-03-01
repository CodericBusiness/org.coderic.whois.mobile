import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.coderic.whois.mobile',
  appName: 'CodericWhoisApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
