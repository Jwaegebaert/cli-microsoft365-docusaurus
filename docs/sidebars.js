// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  home: [
    'index',
    'v6-upgrade-guidance',
    'v5-upgrade-guidance',
    'v4-upgrade-guidance',
    'v3-upgrade-guidance'
  ],
  userGuide: [      
    {
      type: 'category', 
      label: 'User Guide',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'User Guide',
        slug: '/user-guide'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'user-guide'
        }
      ]
    }
  ],
  commands: [     
    {
      type: 'category', 
      label: 'Commands',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'All the commands available within the CLI for Microsoft 365',
        slug: '/cmd'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'cmd'
        }
      ]
    }
  ],
  concepts: [  
    {
      type: 'category', 
      label: 'Concepts',
      collapsible: false,
      link: {
        type: 'generated-index',
        slug: '/concepts'
      },
      items: [
        'concepts/persisting-connection',
        'concepts/authorization-tokens',
        'concepts/communicating-m365'
      ]
    }   
  ],
  sampleScripts: [     
    {
      type: 'category', 
      label: 'Sample Scripts',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'Sample Scripts',
        description: 'This section contains a collection of sample scripts that automate managing the different services in Microsoft 365. If you\'d like to add your script to the collection, let us know by submitting an issue on GitHub. You can browse the scripts by workload, or by using the navigation.',
        slug: '/sample-scripts'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'sample-scripts'
        }
      ]
    }
  ],
  about: [     
    {
      type: 'category', 
      label: 'About',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'About the CLI for Microsoft 365',
        slug: '/about'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'about'
        }
      ]
    }
  ]
};

module.exports = sidebars;
