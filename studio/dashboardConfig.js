export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630625dff5507b006a99336e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-harbour-studio',
                  apiId: '376eac0c-4f54-4461-a85f-c9315f0e1282'
                },
                {
                  buildHookId: '630625df6f00e800a976e175',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-harbour',
                  apiId: '8241f59c-aef4-44da-9ec0-a2bf8d673ef8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcobarbosa/sanity-nextjs-landing-pages-harbour',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-harbour.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
