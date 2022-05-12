const withSourcebit = require('sourcebit').sourcebitNext();
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer(withSourcebit({
    typescript: { ignoreBuildErrors: false },
    devIndicators: {
        autoPrerender: false
    },
    webpack: (config) => {
        config.watchOptions.ignored.push('/content/');
        return config;
    }
}));