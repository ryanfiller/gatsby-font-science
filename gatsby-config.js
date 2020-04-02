module.exports = {
  siteMetadata: {
    title: `Testing Font Loading`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Science Gothic'],
          urls: ['fonts/style.css']
        }
      }
    }
  ],
}
