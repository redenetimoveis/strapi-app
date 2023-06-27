import AuthLogo from './extensions/logo-N.jpg';
import MenuLogo from './extensions/logo-N.jpg';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['pt-BR'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#f6ecfc', // button select color
          primary200: '#e0c1f4', // background color
          primary500: '#ac73e6',
          primary600: '#9736e8', // text color
          primary700: '#8312d1', // border color
          danger700: '#b72b1a',
          active: '#3d7cf1'
        },
      },

      // overwrite dark theme properties
      dark: {
        colors: {
          /* primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a',
          active: '#3d7cf1',
          secondary100: '#f6ecfc',
          secondary200: '#e0c1f4',
          secondary500: '#ac73e6',
          secondary600: '#9736e8',
          secondary700: '#8312d1' */
        },
      }
    },
    // Extend the translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Netimóveis Dashboard',
        'app.components.LeftMenu.navbrand.workplace': 'Admin panel',
        'app.components.HomePage.welcome.again': 'Bem-vindo ao Strapi',
        'app.components.HomePage.welcomeBlock.content.again': ' ',
        'app.components.HomePage.welcome': 'Bem-vindo ao Strapi',
        'app.components.HomePage.welcomeBlock.content': ' ',
        'app.components.HomePage.button.blog': ' ',
        'app.components.HomePage.create': ' ',
        "global.content-manager": "Conteúdo",
        "global.plugins.content-manager": "Content Manager",
      },  
      'pt-BR': {
        "Auth.form.welcome.title": "Bem-vindo ao Strapi",
        'app.components.LeftMenu.navbrand.title': 'Netimóveis Dashboard',
        'app.components.LeftMenu.navbrand.workplace': 'Painel',
        'app.components.HomePage.button.blog': "Netimóveis",
        'app.components.HomePage.welcomeBlock.content.again': 'Fique por dentro das últimas novidades sobre o Strapi. Estamos sempre dando o nosso melhor para melhorar o produto sempre baseando-se em sua opinião.',
        /* 'app.components.BlockLink.cloud': " ",
        'app.components.BlockLink.cloud.content': " ",
        'app.components.BlockLink.documentation.content': " ",
        'app.components.BlockLink.code': " ",
        'app.components.BlockLink.code.content': " ",
        'app.components.BlockLink.tutorial': " ",
        'app.components.BlockLink.tutorial.content': " ",
        'app.components.BlockLink.blog': " ",
        'app.components.BlockLink.blog.content': " ", */
        'global.documentation': " ",
        'global.content-manager': "Gerenciar Conteúdo",
        'HomePage.helmet.title': "Início",
        'app.components.BlockLink: " ",
        /* "app.components.HomePage.roadmap": " ",
        "app.components.HomePage.community": " ",
        "app.components.HomePage.community.content": " ",
        'app.components.HomePage.community.links': ' ',
        'app.components.HomePage.community.links.github': " ",
        'app.components.HomePage.community.links.discord': " ",
        'app.components.HomePage.community.links.reddit': " ",
        'app.components.HomePage.community.links.twitter': " ",
        'app.components.HomePage.community.links.forum': " ",
        'app.components.HomePage.community.links.blog': " ",
        'app.components.HomePage.community.links.career': " ",
        'Settings.application.get-help': " ", */
      }    
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {}
};
