// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GriefDefender Document',
  tagline: 'A protection plugin designed for Bukkit and Sponge!',
  url: 'https://gd.potato-server.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The-Simples & BloodShot', // Usually your GitHub org/user name.
  projectName: 'GriefDefenderDoc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/The-Simples/GriefDefenderDoc/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/The-Simples/GriefDefenderDoc/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GriefDefender',
        logo: {
          alt: 'GDLOGO',
          src: 'https://d33wubrfki0l68.cloudfront.net/59814cb9677cc4d7c9fdfc394f2a592ff3b4a5b0/0dbae/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Document',
          },
          {
            href: 'https://www.spigotmc.org/resources/1-12-2-1-18-2-griefdefender-claim-plugin-grief-prevention-protection.68900/',
            label: 'SpigotMC',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documents',
            items: [
              {
                label: 'Official',
                to: '/docs/intro',
              },
              {
                label: 'Community Doc',
                href: 'https://gd.dlmc.cc/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'QQ Group(Chinese only)',
                href: 'https://jq.qq.com/?_wv=1027&k=jFgCjAIM',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/bloodmc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The-Simples & BloodShot. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
