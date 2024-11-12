/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config, context) => {
        // Enable polling based on env variable being set
        // Windows and WSL2 have issues with watching files
        if(process.env.NEXT_WEBPACK_USEPOLLING) {
          config.watchOptions = {
            poll: 500,
            aggregateTimeout: 300
          }
        }
        return config
      },
}

module.exports = nextConfig
