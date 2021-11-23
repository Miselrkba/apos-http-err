module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'apostrophe:article',
    pluralLabel: 'apostrophe:articles',
    i18n: { ns: 'apostrophe', browser: true }
  },
  fields: {
    add: {
      contributor: {
        label: 'apostrophe:contributor',
        type: 'string'
      },
      main: {
        label: 'apostrophe:main',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      description: {
        label: 'apostrophe:description',
        type: 'string',
        textarea: true,
        max: 160
      },
      photo: {
        label: 'apostrophe:photo',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          max: 1
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title', 'contributor', 'description', 'photo', 'main']
      }
    }
  }
};
