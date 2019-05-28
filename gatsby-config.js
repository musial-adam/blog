module.exports = {
  siteMetadata: {
    title: `Example blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /assets/,
    //     },
    //   },
    // },
    // 'gatsby-plugin-svg-sprite',
    // `gatsby-plugin-eslint`,
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ['develop'],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'Blog',
        // This is field under which it's accessible
        fieldName: 'blog',
        // Url to query from
        url:
          'https://api-euwest.graphcms.com/v1/cjuaamjqi0dr601ghwvspw9xm/master',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: 'One Dark Pro',
              extensions: [
                // {
                //   identifier: 'naumovs.theme-oceanicnext',
                //   version: '0.0.4',
                // },
                {
                  identifier: 'leveluptutorials.theme-levelup',
                  version: '0.1.2',
                },
                {
                  identifier: 'zhuangtongfa.Material-theme',
                  version: '2.23.2',
                },
              ],
            },
            // All options are optional. Defaults shown here.
            // options: {
            //   colorTheme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
            //   wrapperClassName: '', // Additional class put on 'pre' tag
            //   injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
            //   extensions: [], // Extensions to download from the marketplace to provide more languages and themes
            //   languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
            //   replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
            //   getLineClassName: ({
            //     // Function allowing dynamic setting of additional class names on individual lines
            //     content, //   - the string content of the line
            //     index, //   - the zero-based index of the line within the code fence
            //     language, //   - the language specified for the code fence
            //     codeFenceOptions, //   - any options set on the code fence alongside the language (more on this later)
            //   }) => '',
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
