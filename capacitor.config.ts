import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.coderic.whois.mobile',
  appName: 'WhoisApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      "rdap.org"
    ]
  }
};

export default config;
