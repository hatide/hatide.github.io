module.exports = {
  themeConfig: {
  title: 'hatide',
  description: 'Chia sẽ kiến thức, không nên thức khuya.',
  displayAllHeaders: true,
  sidebar: 'auto',
  
  //searchMaxSuggestions: 10,
  // locales: {
  //   '/': {
  //     lang: 'vi-VN',
  //     title: 'hatide',
  //     description: 'Chia sẽ kiến thức, không nên thức khuya.',
  //   },
  // },
  // searchPlaceholder: 'Tìm kiếm...Ctrl + k',
  // head: [
  //   [
  //     'script async',
  //     { src: 'https://www.googletagmanager.com/gtag/js?id=G-BNDGKLZXVE' },
  //   ],
  //   [
  //     'script',
  //     {},
  //     "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BNDGKLZXVE');",
  //   ],
  //   [
  //     'meta',
  //   { name: 'copyright', content: 'Copyright © 2021 by hatide.com' },
  //   ],
  //   ['meta', { name: 'robots', content: 'INDEX, FOLLOW' }],
  //   ['meta', { name: 'googlebot', content: 'INDEX, FOLLOW' }],
  //   ['meta', { property: 'og:type', content: 'website' }],
  //   ['meta', { property: 'og:url', content: 'https://blog.hatide.com' }],
  //   ['meta', { name: 'author', content: 'hatide' }],
  // ],
  // Thiết lập các liên kế trên navbar
  nav: [
    { text: 'Trang chủ', link: '/' },
    {
      text: 'Chuyên mục',
      items: [
        { text: 'SystemC', link: '/danh-muc/systemc' },
        { text: 'UVM', link: '/danh-muc/uvm' },
        { text: 'TLM2', link: '/danh-muc/tlm2' },
        { text: 'DPI-C', link: '/danh-muc/dpi-c' },
        { text: 'System-RDL', link: '/danh-muc/system_rdl' },
        { text: 'General', link: '/danh-muc/general' },
      ],
    },
    // { text: 'Donate', link: '/donate/' },
    { text: 'Liên hệ', link: '/about/' },
  ],
  smoothScroll: true,
  },
  // plugins: [
  //   '@vuepress/back-to-top',
  //   [
  //     '@vuepress/search',
  //     {
  //       searchMaxSuggestions: 10,
  //       searchHotkeys: ['k', '/'],
  //     },
  //   ],
  //   '@vuepress/nprogress',
  // ],
  dest: 'docs',
};