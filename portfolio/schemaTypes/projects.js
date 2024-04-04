export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
