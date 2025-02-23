type Language = 'id' | 'en';

type TranslationType = {
  [key in Language]: {
    welcome: string;
    lastUpdated: string;
    menus: {
      home: string;
      dashboard: string;
      about: string;
      skills: string;
      webPorto: string;
      mobilePorto: string;
      uiuxPorto: string;
    }
  }
}

export const translations: TranslationType = {
  id: {
    welcome: 'Selamat Datang !',
    lastUpdated: 'Diperbarui pada : 21 Feb 2025',
    menus: {
      home: 'Beranda',
      dashboard: 'Dashboard',
      about: 'Tentang',
      skills: 'Keahlian',
      webPorto: 'Web Porto',
      mobilePorto: 'Mobile Porto',
      uiuxPorto: 'UI/UX Porto'
    }
  },
  en: {
    welcome: 'Welcome !',
    lastUpdated: 'Last Updated : Feb 21, 2025',
    menus: {
      home: 'Home',
      dashboard: 'Dashboard',
      about: 'About',
      skills: 'Skills',
      webPorto: 'Web Portfolio',
      mobilePorto: 'Mobile Portfolio',
      uiuxPorto: 'UI/UX Portfolio'
    }
  }
};