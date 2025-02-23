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
        };
        homepage: {
            intro: string;
            name: string;
            skills: string[];
            services: {
                title: string;
                description: string;
                showMore: string;
            };
            collaboration: {
                title: string;
                description: string;
                contactMe: string;
                downloadResume: string;
            };
            location: string;
        };
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
        },
        homepage: {
            intro: "Saya",
            name: "Reyy",
            skills: [
                "• Pengembang Mobile & Web",
                "• Ahli React Native & Next.js 📱",
                "• Berdomisili di Bandung, ID 🚀"
            ],
            services: {
                title: "Layanan",
                description: "Spesialis bikin website & aplikasi mobile yang sesuai kebutuhan prusahaan. Dari konsep sampai jadi, semua bisa dihandle!",
                showMore: "show more →"
            },
            collaboration: {
                title: "🤝 Mari bekerja sama!",
                description: "Saya terbuka untuk proyek freelance, jangan ragu untuk mengirim email kepada saya untuk melihat bagaimana kita bisa berkolaborasi.",
                contactMe: "📧 Hubungi Saya",
                downloadResume: "📄 Unduh Resume"
            },
            location: "Bandung, ID"
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
        },
        homepage: {
            intro: "I'm",
            name: "Reyy",
            skills: [
              "• Mobile & Web Developer",
              "• Native & Next.js Expert📱",
              "• Based in Bandung, ID 🚀"
            ],
            services: {
              title: "Services",
              description: "Specialist in creating websites & mobile applications according to company needs. From concept to completion, everything can be handled!",
              showMore: "show more →"
            },
            collaboration: {
              title: "🤝 Let's collaborate!",
              description: "I'm open for freelance projects, don't hesitate to email me to see how we can collaborate.",
              contactMe: "📧 Contact Me",
              downloadResume: "📄 Download Resume"
            },
            location: "Bandung, ID"
          }
    }
};