// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ],
    park: [
      {
        name: 'article-page',
        type: 'article-page',
        title: 'Správy',
        slug: '/spravy',
        published: true,
        parkedId: 'articlePage'
      }
    ]
  }
};
